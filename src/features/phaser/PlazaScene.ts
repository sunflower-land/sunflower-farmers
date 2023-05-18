/**
 * ---------------------------
 * Phaser + Colyseus - Part 4.
 * ---------------------------
 * - Connecting with the room
 * - Sending inputs at the user's framerate
 * - Update other player's positions WITH interpolation (for other players)
 * - Client-predicted input for local (current) player
 * - Fixed tickrate on both client and server
 */

import Phaser from "phaser";
import { Room, Client } from "colyseus.js";

import mapPng from "./assets/embedded.png";
import mapJson from "./assets/world_plaza.json";
import speechBubble from "./assets/speech_bubble.png";
// import tilesheet from "./assets/idle-Sheet.png";
// import walking from "./assets/walking.png";
import shadow from "assets/npcs/shadow.png";
import silhouette from "assets/npcs/silhouette.webp";
import fontPng from "./assets/white.png";
import { INITIAL_BUMPKIN, SQUARE_WIDTH } from "features/game/lib/constants";
import { subber } from "./Phaser";
import { npcModalManager } from "./NPCModals";
import { BumpkinContainer } from "./BumpkinContainer";
import { interactableModalManager } from "./InteractableModals";

export const BACKEND_URL =
  window.location.href.indexOf("localhost") === -1
    ? `${window.location.protocol.replace("http", "ws")}//${
        window.location.hostname
      }${window.location.port && `:${window.location.port}`}`
    : "ws://localhost:2567";

export const BACKEND_HTTP_URL = BACKEND_URL.replace("ws", "http");

export class PhaserScene extends Phaser.Scene {
  room: Room;

  currentPlayer: BumpkinContainer;
  betty: BumpkinContainer;
  playerEntities: {
    [sessionId: string]: BumpkinContainer;
  } = {};
  // playerMessages: {
  //   [sessionId: string]: SpeechBubble;
  // } = {};

  /** @type {Phaser.Physics.Arcade.StaticGroup} */
  boxGroup;

  debugFPS: Phaser.GameObjects.Text;

  localRef: Phaser.GameObjects.Rectangle;
  remoteRef: Phaser.GameObjects.Rectangle;

  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  inputPayload = {
    left: false,
    right: false,
    up: false,
    down: false,
    tick: undefined,
  };

  elapsedTime = 0;
  fixedTimeStep = 1000 / 60;

  currentTick = 0;

  constructor() {
    super("game");
  }

  preload() {
    // load the JSON file
    this.load.tilemapTiledJSON("main-map", mapJson);

    // load the PNG file
    this.load.image("tileset", mapPng);
    this.load.image("speech_bubble", speechBubble);
    this.load.image("shadow", shadow);
    this.load.spritesheet("silhouette", silhouette, {
      frameWidth: 14,
      frameHeight: 18,
    });

    // this.load.spritesheet("bumpkin", tilesheet, {
    //   frameWidth: 14,
    //   frameHeight: 18,
    // });
    // this.load.spritesheet("walking", walking, {
    //   frameWidth: 13,
    //   frameHeight: 18,
    // });
  }

  async create() {
    // CSSString: 'url(assets/input/cursors/sword.cur), pointer'
    this.load.bitmapFont(
      "bitmapFont",
      fontPng,
      "./src/features/phaser/assets/white.fnt"
    );
    const map = this.make.tilemap({
      key: "main-map",
    });
    const tileset = map.addTilesetImage("Sunnyside V3", "tileset", 16, 16);

    const customColliders = this.add.group();

    console.log({ ob: map.getObjectLayer("Interactables")?.objects });

    const collisionPolygons = map.createFromObjects("Collision", {
      scene: this,
    });

    console.log(collisionPolygons);

    collisionPolygons.forEach((polygon) => {
      customColliders.add(polygon);
      this.physics.world.enable(polygon);
      polygon.body.setImmovable(true);
    });

    const interactablesPolygons = map.createFromObjects("Interactable", {});

    interactablesPolygons.forEach((polygon) => {
      polygon.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
        console.log(polygon.x);
        console.log(polygon.y);
        const distance = Phaser.Math.Distance.BetweenPoints(
          polygon as unknown as Phaser.Math.Vector2,
          this.currentPlayer
        );
        console.log({ distance });
        if (distance > 30) {
          console.log({ Distance: distance, polygon });
          // const textR = this.add
          //   .text(, "Too far away", {
          //     font: "6px Monospace",
          //     color: "#000000",
          //   })
          //   .setResolution(10);
          const text = this.add.bitmapText(
            polygon.x - 20,
            polygon.y,
            "bitmapFont",
            "Move closer!",
            8
          );

          setTimeout(() => {
            text.destroy();
          }, 1000);

          return;
        }

        const id = polygon.data.list.id;
        console.log("Interactive clicked", id);
        interactableModalManager.open(id);
      });
    });

    this.physics.world.drawDebug = true;

    const TOP_LAYERS = [
      "Decorations Layer 1",
      "Decorations Layer 2",
      "Decorations Layer 3",
      "Building Layer 2",
      "Building Layer 3",
    ];

    map.layers.forEach((layerData, idx) => {
      const layer = map.createLayer(layerData.name, tileset, 0, 0);

      console.log({ name: layerData.name });
      if (layerData.name === "Interactables") {
        layer.layer.data.forEach((tileRows) => {
          tileRows.forEach((tile) => {
            const { index, tileset, properties } = tile;
            console.log({ properties });
          });
        });
      }

      if (TOP_LAYERS.includes(layerData.name)) {
        console.log("Got it");
        layer?.setDepth(1);
      }
    });

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    const keySPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.input.keyboard?.removeCapture("SPACE");

    this.debugFPS = this.add.text(4, 4, "", { color: "#ff0000" });

    // connect with the room
    await this.connect();

    subber.subscribe((text: string) => {
      this.room.send(0, { text });
    });

    this.room.state.messages.onAdd((message) => {
      console.log({ message: message, sId: message.sessionId });

      if (message.sessionId && String(message.sessionId).length > 4) {
        this.playerEntities[message.sessionId].speak(message.text);
      }
    });

    this.room.state.players.onAdd((player, sessionId) => {
      console.log({ player, sessionId });

      const entity = new BumpkinContainer(
        this,
        player.x,
        player.y,
        INITIAL_BUMPKIN
      );
      this.playerEntities[sessionId] = entity;

      // is current player
      if (sessionId === this.room.sessionId) {
        this.currentPlayer = entity;

        this.localRef = this.add.rectangle(0, 0, entity.width, entity.height);
        // this.localRef.setStrokeStyle(1, 0x00ff00);

        this.remoteRef = this.add.rectangle(0, 0, entity.width, entity.height);
        // this.remoteRef.setStrokeStyle(1, 0xff0000);

        player.onChange(() => {
          this.remoteRef.x = player.x;
          this.remoteRef.y = player.y;
        });

        this.currentPlayer.body.width = 10;
        this.currentPlayer.body.height = 8;
        this.currentPlayer.body.setOffset(3, 10);

        // this.physics.add.collider(this.currentPlayer, collisionLayer);
        this.currentPlayer.body.setCollideWorldBounds(true);
        console.log({ player: this.currentPlayer, betty: this.betty });
        this.physics.add.collider(this.currentPlayer, customColliders);
        this.physics.add.collider(this.currentPlayer, this.betty);

        camera.startFollow(this.currentPlayer, true, 0.08, 0.08);
      } else {
        // listening for server updates
        player.onChange(() => {
          console.log({ player });
          //
          // we're going to LERP the positions during the render loop.
          //
          entity.setData("serverX", player.x);
          entity.setData("serverY", player.y);
        });
      }
    });

    // remove local reference when entity is removed from the server
    this.room.state.players.onRemove((player, sessionId) => {
      const entity = this.playerEntities[sessionId];
      if (entity) {
        entity.destroy();
        delete this.playerEntities[sessionId];
      }
    });

    const { width, height } = this.scale;

    console.log({ width, height });

    console.log("play");

    this.boxGroup = this.physics.add.staticGroup();

    const { game } = this.sys;
    const camera = this.cameras.main;
    console.log(JSON.stringify(game.scale.gameSize));

    camera.setBounds(0, 0, 55 * SQUARE_WIDTH, 32 * SQUARE_WIDTH);
    camera.setZoom(4);

    this.physics.world.setBounds(0, 0, 55 * SQUARE_WIDTH, 32 * SQUARE_WIDTH);

    this.initialiseNPCs();
  }

  private initialiseNPCs() {
    // Betty
    this.betty = new BumpkinContainer(
      this,
      400,
      400,
      {
        ...INITIAL_BUMPKIN,
        id: 44444,
        equipped: {
          ...INITIAL_BUMPKIN.equipped,
          hair: "Rancher Hair",
        },
      },
      () => npcModalManager.open("betty")
    );
    this.betty.body.width = 16;
    this.betty.body.height = 20;
    this.betty.body.setOffset(0, 0);
    this.physics.world.enable(this.betty);
    this.betty.body.setImmovable(true);

    this.betty.body.setCollideWorldBounds(true);
    console.log({ player: this.currentPlayer });
    // this.physics.add.collider(this.currentPlayer, this.betty);

    // this.physics.collide(this.currentPlayer, this.betty);
    // this.physics.add.collider(this.currentPlayer, betty.body);

    return;

    // betty.body.setCollideWorldBounds(true);
    console.log({ player: this.currentPlayer });
  }

  async connect() {
    // add connection status text
    const connectionStatusText = this.add
      .text(0, 0, "Trying to connect with the server...")
      .setStyle({ color: "#ff0000" })
      .setPadding(4);

    const client = new Client(BACKEND_URL);

    try {
      this.room = await client.joinOrCreate("part4_room", {});

      // connection successful!
      connectionStatusText.destroy();
    } catch (e) {
      // couldn't connect
      connectionStatusText.text = "Could not connect with the server.";
    }
  }

  update(time: number, delta: number): void {
    // skip loop if not connected yet.
    // if (!this.currentPlayer) {
    //   return;
    // }

    this.elapsedTime += delta;
    while (this.elapsedTime >= this.fixedTimeStep) {
      this.elapsedTime -= this.fixedTimeStep;
      this.fixedTick(time, this.fixedTimeStep);
    }

    this.debugFPS.text = `Frame rate: ${this.game.loop.actualFps}`;
  }

  fixedTick(time: number, delta: number) {
    this.currentTick++;

    // const currentPlayerRemote = this.room.state.players.get(this.room.sessionId);
    // const ticksBehind = this.currentTick - currentPlayerRemote.tick;
    // console.log({ ticksBehind });
    const speed = 50;

    const velocity = 1;
    this.inputPayload.left = this.cursorKeys.left.isDown;
    this.inputPayload.right = this.cursorKeys.right.isDown;
    this.inputPayload.up = this.cursorKeys.up.isDown;
    this.inputPayload.down = this.cursorKeys.down.isDown;
    this.inputPayload.tick = this.currentTick;

    if (this.inputPayload.left) {
      this.currentPlayer.body.setVelocityX(-speed);
      this.currentPlayer.sprite.setScale(-1, 1);
      this.currentPlayer.body.width = 10;
      this.currentPlayer.body.height = 10;
      this.currentPlayer.body.setOffset(2, 10);
    } else if (this.inputPayload.right) {
      this.currentPlayer.body.setVelocityX(speed);
      this.currentPlayer.sprite.setScale(1, 1);
      this.currentPlayer.body.setOffset(3, 10);
    } else {
      this.currentPlayer.body.setVelocityX(0);
    }

    const isMovingHorizontally =
      this.inputPayload.left || this.inputPayload.right;

    const baseSpeed = isMovingHorizontally ? 0.7 : 1;
    if (this.inputPayload.up) {
      // this.currentPlayer.y -= velocity;
      this.currentPlayer.body.setVelocityY(-speed * baseSpeed);
    } else if (this.inputPayload.down) {
      // this.currentPlayer.y += velocity;
      this.currentPlayer.body.setVelocityY(speed * baseSpeed);
    } else {
      this.currentPlayer.body.setVelocityY(0);
    }

    this.localRef.x = this.currentPlayer.x;
    this.localRef.y = this.currentPlayer.y;

    this.room.send(0, {
      x: this.currentPlayer.x,
      y: this.currentPlayer.y,
    });

    for (const sessionId in this.playerEntities) {
      // interpolate all player entities
      // (except the current player)
      if (sessionId === this.room.sessionId) {
        continue;
      }

      const entity = this.playerEntities[sessionId];
      const { serverX, serverY } = entity.data.values;

      if (serverX > entity.x) {
        entity.setScale(1, 1);
      } else if (serverX < entity.x) {
        entity.setScale(-1, 1);
      }

      entity.x = Phaser.Math.Linear(entity.x, serverX, 0.2);
      entity.y = Phaser.Math.Linear(entity.y, serverY, 0.2);
    }
  }
}
