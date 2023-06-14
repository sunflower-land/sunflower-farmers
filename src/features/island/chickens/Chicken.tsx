import { useActor, useInterpret, useSelector } from "@xstate/react";
import React, { useContext, useState } from "react";
import classNames from "classnames";

import hungryChicken from "assets/animals/chickens/hungry_2.gif";
import happyChicken from "assets/animals/chickens/happy_2.gif";
import walkingChickenSheet from "assets/animals/chickens/walking_sheet_2.png";
import sleepingChicken from "assets/animals/chickens/sleeping_2.gif";
import chickenShadow from "assets/animals/chickens/chicken_shadow.png";
import layingEggSheet from "assets/animals/chickens/laying-egg-sheet_2.png";
import wheatOnGround from "assets/animals/chickens/wheat_2.png";

import { Context } from "features/game/GameProvider";

import Spritesheet from "components/animation/SpriteAnimator";
import {
  CHICKEN_TIME_TO_EGG,
  PIXEL_SCALE,
  POPOVER_TIME_MS,
} from "features/game/lib/constants";
import Decimal from "decimal.js-light";
import { Bar } from "components/ui/ProgressBar";
import { InnerPanel } from "components/ui/Panel";
import { secondsToString } from "lib/utils/time";
import { MutantChicken } from "features/game/types/craftables";
import {
  ChickenContext,
  chickenMachine,
  MachineInterpreter as ChickenMachineInterpreter,
  MachineState as ChickenMachineState,
} from "features/farming/animals/chickenMachine";
import { MutantChickenModal } from "features/farming/animals/components/MutantChickenModal";
import { getShortcuts } from "features/farming/hud/lib/shortcuts";
import { getWheatRequiredToFeed } from "features/game/events/landExpansion/feedChicken";
import { SUNNYSIDE } from "assets/sunnyside";
import { CROP_LIFECYCLE } from "../plots/lib/plant";
import { Collectibles, Chicken as ChickenType } from "features/game/types/game";
import { isCollectibleBuilt } from "features/game/lib/collectibleBuilt";
import { MachineState as GameMachineState } from "features/game/lib/gameMachine";
import { MachineState } from "features/game/expansion/placeable/landscapingMachine";
import { MoveableComponent } from "../collectibles/MovableComponent";
import { Coordinates } from "features/game/expansion/components/MapPlacement";
import { ZoomContext } from "components/ZoomProvider";
import { isLocked } from "features/game/events/landExpansion/moveChicken";

const getPercentageComplete = (fedAt?: number) => {
  if (!fedAt) return 0;

  const timePassedSinceFed = Date.now() - fedAt;

  if (timePassedSinceFed >= CHICKEN_TIME_TO_EGG) return 100;

  return Math.ceil((timePassedSinceFed / CHICKEN_TIME_TO_EGG) * 100);
};

const selectTimeToEgg = (state: ChickenMachineState) => state.context.timeToEgg;
const selectTimeElapsed = (state: ChickenMachineState) =>
  state.context.timeElapsed;

interface TimeToEggProps {
  service: ChickenMachineInterpreter;
  showTimeToEgg: boolean;
}

const TimeToEgg = ({ showTimeToEgg, service }: TimeToEggProps) => {
  const timeToEgg = useSelector(service, selectTimeToEgg);
  const timeElapsed = useSelector(service, selectTimeElapsed);

  return (
    <InnerPanel
      className={classNames(
        "ml-10 transition-opacity absolute whitespace-nowrap sm:opacity-0 bottom-5 w-fit left-1 z-50 pointer-events-none",
        {
          "opacity-100": showTimeToEgg,
          "opacity-0": !showTimeToEgg,
        }
      )}
    >
      <div className="flex flex-col text-xxs ml-2 mr-2">
        <div className="flex flex-1 items-center justify-center">
          <img src={SUNNYSIDE.resource.egg} className="w-4 mr-1" />
          <span>Egg</span>
        </div>
        <span className="flex-1">
          {secondsToString(timeToEgg - timeElapsed, {
            length: "medium",
          })}
        </span>
      </div>
    </InnerPanel>
  );
};

const HasWheat = (
  inventoryWheatCount: Decimal,
  collectibles: Collectibles,
  selectedItem?: string
) => {
  const wheatRequired = getWheatRequiredToFeed(collectibles);

  // has enough wheat to feed chickens

  if (wheatRequired.lte(0)) return true;

  return selectedItem === "Wheat" && inventoryWheatCount.gte(wheatRequired);
};

const isHungry = (state: ChickenMachineState) => state.matches("hungry");
const isEating = (state: ChickenMachineState) => state.matches("eating");
const isSleeping = (state: ChickenMachineState) =>
  state.matches({ fed: "sleeping" });
const isHappy = (state: ChickenMachineState) => state.matches({ fed: "happy" });
const isEggReady = (state: ChickenMachineState) => state.matches("eggReady");
const isEggLaid = (state: ChickenMachineState) => state.matches("eggLaid");
const selectInventoryWheatCount = (state: GameMachineState) =>
  state.context.state.inventory.Wheat ?? new Decimal(0);
const selectCollectibles = (state: GameMachineState) =>
  state.context.state.collectibles;

const compareChicken = (prev: ChickenType, next: ChickenType) => {
  return JSON.stringify(prev) === JSON.stringify(next);
};
const compareCollectibles = (prev: Collectibles, next: Collectibles) =>
  isCollectibleBuilt("Gold Egg", prev) ===
    isCollectibleBuilt("Gold Egg", next) &&
  isCollectibleBuilt("Fat Chicken", prev) ===
    isCollectibleBuilt("Fat Chicken", next);

interface Props {
  id: string;
  coordinates: Coordinates;
}

const ChickenComponent: React.FC<Props> = ({ id }) => {
  const { scale } = useContext(ZoomContext);
  const { gameService, selectedItem, showTimers } = useContext(Context);

  const chicken = useSelector(
    gameService,
    (state) => state.context.state.chickens[id],
    compareChicken
  );
  const collectibles = useSelector(
    gameService,
    selectCollectibles,
    compareCollectibles
  );
  const inventoryWheatCount = useSelector(
    gameService,
    selectInventoryWheatCount,
    (prev: Decimal, next: Decimal) =>
      HasWheat(prev, collectibles, selectedItem) ===
      HasWheat(next, collectibles, selectedItem)
  );

  const percentageComplete = getPercentageComplete(chicken?.fedAt);

  const chickenContext: Partial<ChickenContext> = chicken;

  // useInterpret returns a static reference (to just the interpreted machine) which will not rerender when its state changes
  const chickenService = useInterpret(chickenMachine, {
    // If chicken is already brewing an egg then add that to the chicken machine context
    context: chickenContext,
  }) as unknown as ChickenMachineInterpreter;

  // As per xstate docs:
  // To use a piece of state from the service inside a render, use the useSelector(...) hook to subscribe to it
  const hungry = useSelector(chickenService, isHungry);
  const eating = useSelector(chickenService, isEating);
  const sleeping = useSelector(chickenService, isSleeping);
  const happy = useSelector(chickenService, isHappy);
  const eggReady = useSelector(chickenService, isEggReady);
  const eggLaid = useSelector(chickenService, isEggLaid);

  const eggIsBrewing = happy || sleeping;
  const showEggProgress =
    showTimers && chicken && !eating && !eggLaid && !hungry;
  const interactible = hungry || eggReady || eggLaid;

  // Popover is to indicate when player has no wheat or when wheat is not selected.
  const [showPopover, setShowPopover] = useState(false);
  const [showTimeToEgg, setShowTimeToEgg] = useState(false);
  const [showMutantModal, setShowMutantModal] = useState(false);

  const shortcuts = getShortcuts();
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const handleMouseEnter = () => {
    eggIsBrewing && setShowTimeToEgg(true);
  };

  const handleMouseLeave = () => {
    setShowTimeToEgg(false);
  };

  const handleClick = () => {
    if (eggReady) {
      chickenService.send("LAY");
      return;
    }

    if (eggLaid) {
      handleCollect();
      return;
    }

    if (hungry) {
      feed();
      return;
    }
  };

  const feed = async () => {
    const hasWheat = HasWheat(inventoryWheatCount, collectibles, selectedItem);

    if (!hasWheat) {
      setShowPopover(true);
      await new Promise((resolve) => setTimeout(resolve, POPOVER_TIME_MS));
      setShowPopover(false);
      return;
    }

    const {
      context: {
        state: { chickens },
      },
    } = gameService.send("chicken.fed", {
      id,
    });

    const chicken = chickens[id];

    chickenService.send("FEED", {
      fedAt: chicken.fedAt,
    });
  };

  const handleCollect = () => {
    if (chicken.reward) {
      setShowMutantModal(true);
      return;
    }

    collectEgg();
  };

  const handleContinue = () => {
    setShowMutantModal(false);
    collectEgg();
  };

  const collectEgg = () => {
    const newState = gameService.send("chicken.collectEgg", {
      id,
    });

    if (!newState.matches("hoarding")) {
      chickenService.send("COLLECT");
    }
  };

  return (
    <>
      <div
        className={classNames("w-full h-full relative", {
          "cursor-pointer hover:img-highlight": interactible,
        })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative pointer-events-none">
          {hungry && (
            <>
              <img
                src={chickenShadow}
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 13}px`,
                  top: `${PIXEL_SCALE * 10}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                }}
              />
              <img
                src={hungryChicken}
                alt="hungry-chicken"
                style={{
                  width: `${PIXEL_SCALE * 16}px`,
                  top: `${PIXEL_SCALE * -5}px`,
                  left: `${PIXEL_SCALE * 2}px`,
                }}
                className="absolute"
              />
              <img
                src={SUNNYSIDE.icons.cancel}
                className={classNames("transition-opacity absolute z-20", {
                  "opacity-100": showPopover,
                  "opacity-0": !showPopover,
                })}
                style={{
                  width: `${PIXEL_SCALE * 8}px`,
                  top: `${PIXEL_SCALE * 8}px`,
                  left: `${PIXEL_SCALE * 4}px`,
                }}
              />
              <img
                src={CROP_LIFECYCLE.Wheat.crop}
                className={classNames("transition-opacity absolute z-10", {
                  "opacity-100": showPopover,
                  "opacity-0": !showPopover,
                })}
                style={{
                  width: `${PIXEL_SCALE * 8}px`,
                  top: `${PIXEL_SCALE * 5}px`,
                  left: `${PIXEL_SCALE * 9}px`,
                }}
              />
            </>
          )}
          {eating && (
            <>
              <img
                src={wheatOnGround}
                alt="wheat-on-ground"
                className="absolute display-block"
                style={{
                  width: `${PIXEL_SCALE * 126}px`,
                  imageRendering: "pixelated",
                }}
              />
              <Spritesheet
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 32}px`,
                  top: `${PIXEL_SCALE * -9}px`,
                  left: `${PIXEL_SCALE * -7}px`,
                  imageRendering: "pixelated",
                }}
                image={walkingChickenSheet}
                widthFrame={32}
                heightFrame={32}
                zoomScale={scale}
                fps={10}
                steps={50}
                direction={`forward`}
                autoplay={true}
                loop={true}
              />
            </>
          )}
          {happy && (
            <>
              <img
                src={chickenShadow}
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 13}px`,
                  top: `${PIXEL_SCALE * 10}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                }}
              />
              <img
                src={happyChicken}
                alt="happy-chicken"
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 16}px`,
                  top: `${PIXEL_SCALE * -6}px`,
                  left: `${PIXEL_SCALE * 2}px`,
                }}
              />
            </>
          )}
          {sleeping && (
            <>
              <img
                src={chickenShadow}
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 13}px`,
                  top: `${PIXEL_SCALE * 10}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                }}
              />
              <img
                src={sleepingChicken}
                alt="sleeping-chicken"
                className="absolute"
                style={{
                  transformOrigin: "top left",
                  scale: "calc(19/16)",
                  width: `${PIXEL_SCALE * 16}px`,
                  top: `${PIXEL_SCALE * -8}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                }}
              />
            </>
          )}
          {eggReady && (
            <>
              <img
                src={chickenShadow}
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 13}px`,
                  top: `${PIXEL_SCALE * 10}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                }}
              />
              <Spritesheet
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 17}px`,
                  top: `${PIXEL_SCALE * -16}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                  imageRendering: "pixelated",
                }}
                image={layingEggSheet}
                widthFrame={17}
                heightFrame={31}
                zoomScale={scale}
                fps={3}
                steps={21}
                endAt={7}
                direction={`forward`}
                autoplay={true}
                loop={true}
              />
            </>
          )}
          {eggLaid && (
            <>
              <img
                src={chickenShadow}
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 13}px`,
                  top: `${PIXEL_SCALE * 10}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                }}
              />
              <Spritesheet
                image={layingEggSheet}
                className="absolute"
                style={{
                  width: `${PIXEL_SCALE * 17}px`,
                  top: `${PIXEL_SCALE * -16}px`,
                  left: `${PIXEL_SCALE * 1}px`,
                  imageRendering: "pixelated",
                }}
                widthFrame={17}
                heightFrame={31}
                zoomScale={scale}
                fps={20}
                steps={21}
                direction={`forward`}
                autoplay={true}
                loop={false}
              />
            </>
          )}
        </div>
      </div>

      <TimeToEgg showTimeToEgg={showTimeToEgg} service={chickenService} />
      {showEggProgress && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: `${PIXEL_SCALE * 15}px`,
            top: `${PIXEL_SCALE * 14}px`,
          }}
        >
          <Bar percentage={percentageComplete} type="progress" />
        </div>
      )}
      {showMutantModal && (
        <MutantChickenModal
          show={showMutantModal}
          type={chicken.reward?.items?.[0].name as MutantChicken}
          onContinue={handleContinue}
        />
      )}
    </>
  );
};

const isLandscaping = (state: MachineState) => state.matches("landscaping");

export const Chicken: React.FC<Props> = (props) => {
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const collectibles = gameState.context.state.collectibles;
  const chickens = gameState.context.state.chickens;
  const [showPopover, setShowPopover] = useState(false);

  const landscaping = useSelector(gameService, isLandscaping);

  const handleMouseEnter = () => {
    // set state to show details
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    // set state to hide details
    setShowPopover(false);
  };

  if (landscaping) {
    // In Landscaping mode, use readonly building

    if (isLocked(chickens[props.id], collectibles, Date.now())) {
      return (
        <div
          className="relative w-full h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <InnerPanel
            className={classNames(
              "transition-opacity absolute whitespace-nowrap sm:opacity-0 w-fit z-50 pointer-events-none",
              {
                "opacity-100": showPopover,
                "opacity-0": !showPopover,
              }
            )}
            style={{
              top: `${PIXEL_SCALE * -10}px`,
              left: `${PIXEL_SCALE * 16}px`,
            }}
          >
            <div className="flex flex-col text-xxs text-white text-shadow mx-2">
              <div className="flex flex-1 items-center justify-center">
                <img src={SUNNYSIDE.icons.cancel} className="w-4 mr-1" />
                <span>AoE Locked</span>
              </div>
            </div>
          </InnerPanel>
          <div className="relative">
            <ChickenComponent {...props} />
          </div>
        </div>
      );
    }
    return (
      <MoveableComponent
        name="Chicken"
        x={props.coordinates.x}
        y={props.coordinates.y}
        id={props.id}
      >
        <ChickenComponent {...props} />
      </MoveableComponent>
    );
  }

  return <ChickenComponent {...props} />;
};
