import { craft, CraftAction } from "./craft";
import { sell, SellAction } from "./sell";
import { plant, PlantAction } from "./plant";
import { harvest, HarvestAction } from "./harvest";
import { mineGold, GoldMineAction } from "./goldMine";
import { mineStone, StoneMineAction } from "./stoneMine";
import { mineIron, IronMineAction } from "./ironMine";
import { chop, ChopAction } from "./chop";
import { openReward, OpenRewardAction } from "./rewarded";

import { GameState } from "../types/game";
import { CollectEggAction, collectEgg } from "./collectEgg";
import { canPollinate, HoneyAction, Pollinate } from "./harvestHoney";
import { FlowerAction, plantFlower } from "./getFlower";
import { flowerHarvest, HarvestFlowerAction } from "./harvestFlower";
import { openFlowerReward, openFlowerRewardAction } from "./flower_reward";

export type GameEvent =
  | CraftAction
  | SellAction
  | PlantAction
  | HarvestAction
  | StoneMineAction
  | IronMineAction
  | GoldMineAction
  | ChopAction
  | OpenRewardAction
  | CollectEggAction
  // | HoneyAction
  | FlowerAction
  | HarvestFlowerAction
  | openFlowerRewardAction;

type EventName = Extract<GameEvent, { type: string }>["type"];

/**
 * Type which enables us to map the event name to the payload containing that event name
 */
type Handlers = {
  [Name in EventName]: (options: {
    state: GameState;
    // Extract the correct event payload from the list of events
    action: Extract<GameEvent, { type: Name }>;
  }) => GameState;
};

export const EVENTS: Handlers = {
  "item.planted": plant,
  "item.harvested": harvest,
  "item.crafted": craft,
  "item.sell": sell,
  "stone.mined": mineStone,
  "iron.mined": mineIron,
  "gold.mined": mineGold,
  "tree.chopped": chop,
  "reward.opened": openReward,
  "easterEgg.collected": collectEgg,
  // "flower.pollinated": Pollinate,
  "flower.planted": plantFlower,
  "flower.harvested": flowerHarvest,
  "flower.reward": openFlowerReward,
};
