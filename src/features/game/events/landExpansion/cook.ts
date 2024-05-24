import cloneDeep from "lodash.clonedeep";
import Decimal from "decimal.js-light";
import {
  ConsumableName,
  CookableName,
  COOKABLES,
} from "features/game/types/consumables";
import { Bumpkin, GameState } from "features/game/types/game";
import { getKeys } from "features/game/types/craftables";
import { getCookingTime } from "features/game/expansion/lib/boosts";
import { translate } from "lib/i18n/translate";
import { FeatureName } from "lib/flags";
import {
  BuildingName,
  CookingBuildingName,
} from "features/game/types/buildings";

export const FLAGGED_RECIPES: Partial<Record<ConsumableName, FeatureName>> = {
  "Seafood Basket": "DESERT_RECIPES",
  "Fish Burger": "DESERT_RECIPES",
  "Fish n Chips": "DESERT_RECIPES",
  "Fish Omelette": "DESERT_RECIPES",
  "Fried Calamari": "DESERT_RECIPES",
  "Fried Tofu": "DESERT_RECIPES",
  "Grape Juice": "DESERT_RECIPES",
  "Ocean's Olive": "DESERT_RECIPES",
  "Quick Juice": "DESERT_RECIPES",
  "Rice Bun": "DESERT_RECIPES",
  "Slow Juice": "DESERT_RECIPES",
  "Steamed Red Rice": "DESERT_RECIPES",
  "Sushi Roll": "DESERT_RECIPES",
  "The Lot": "DESERT_RECIPES",
  "Tofu Scramble": "DESERT_RECIPES",
  Antipasto: "DESERT_RECIPES",
};

export type RecipeCookedAction = {
  type: "recipe.cooked";
  item: CookableName;
  buildingId: string;
};

type Options = {
  state: Readonly<GameState>;
  action: RecipeCookedAction;
  createdAt?: number;
};

type GetReadyAtArgs = {
  buildingName: BuildingName;
  item: CookableName;
  bumpkin: Bumpkin;
  createdAt: number;
  game: GameState;
};

export const BUILDING_OIL_BOOSTS: Record<CookingBuildingName, number> = {
  "Fire Pit": 0.2,
  Kitchen: 0.25,
  Bakery: 0.35,
  Deli: 0.4,
};

function isCookingBuilding(
  building: BuildingName
): building is CookingBuildingName {
  return (building as CookingBuildingName) !== undefined;
}

export function getCookingOilBoost(
  buildingName: BuildingName,
  item: CookableName,
  game: GameState
): { timeToCook: number; oilConsumed: number } {
  if (!isCookingBuilding(buildingName)) {
    return { timeToCook: COOKABLES[item].cookingSeconds, oilConsumed: 0 };
  }

  const itemCookingTime = COOKABLES[item].cookingSeconds;

  const itemOilConsumption = getOilConsumption(buildingName, item);
  const oilRemaining = game.buildings[buildingName]?.[0].oilRemaining || 0;

  const boostValue = BUILDING_OIL_BOOSTS[buildingName];
  const boostedCookingTime = itemCookingTime * (1 - boostValue);

  if (oilRemaining >= itemOilConsumption) {
    return { timeToCook: boostedCookingTime, oilConsumed: itemOilConsumption };
  }

  // Calculate the partial boost based on remaining oil
  const effectiveBoostValue = (oilRemaining / itemOilConsumption) * boostValue;
  const partialBoostedCookingTime = itemCookingTime * (1 - effectiveBoostValue);

  return {
    timeToCook: partialBoostedCookingTime,
    oilConsumed: (oilRemaining / itemOilConsumption) * itemOilConsumption,
  };
}

export const getReadyAt = ({
  buildingName,
  item,
  bumpkin,
  createdAt,
  game,
}: GetReadyAtArgs) => {
  const withOilBoost = getCookingOilBoost(buildingName, item, game).timeToCook;

  const seconds = getCookingTime(withOilBoost, bumpkin, game);

  return createdAt + seconds * 1000;
};

export const BUILDING_DAILY_OIL_CONSUMPTION: Record<
  CookingBuildingName,
  number
> = {
  "Fire Pit": 1,
  Kitchen: 5,
  Bakery: 10,
  Deli: 12,
};

export function getOilConsumption(
  buildingName: CookingBuildingName,
  food: CookableName
) {
  const SECONDS_IN_A_DAY = 86400;
  const oilRequired = COOKABLES[food].cookingSeconds / SECONDS_IN_A_DAY;

  return BUILDING_DAILY_OIL_CONSUMPTION[buildingName] * oilRequired;
}

export function cook({
  state,
  action,
  createdAt = Date.now(),
}: Options): GameState {
  const stateCopy: GameState = cloneDeep(state);

  const { building: requiredBuilding, ingredients } = COOKABLES[action.item];
  const { buildings, bumpkin } = stateCopy;
  const buildingsOfRequiredType = buildings[requiredBuilding];

  if (!Object.keys(buildings).length || !buildingsOfRequiredType) {
    throw new Error(translate("error.requiredBuildingNotExist"));
  }

  const building = buildingsOfRequiredType.find(
    (building) => building.id === action.buildingId
  );

  if (bumpkin === undefined) {
    throw new Error(translate("no.have.bumpkin"));
  }

  if (!building) {
    throw new Error(translate("error.requiredBuildingNotExist"));
  }

  if (building.crafting !== undefined) {
    throw new Error(translate("error.cookingInProgress"));
  }

  const oilConsumed = getCookingOilBoost(
    requiredBuilding,
    action.item,
    stateCopy
  ).oilConsumed;
  stateCopy.inventory = getKeys(ingredients).reduce((inventory, ingredient) => {
    const count = inventory[ingredient] || new Decimal(0);
    const amount = ingredients[ingredient] || new Decimal(0);

    if (count.lessThan(amount)) {
      throw new Error(`Insufficient ingredient: ${ingredient}`);
    }

    return {
      ...inventory,
      [ingredient]: count.sub(amount),
    };
  }, stateCopy.inventory);

  const previousOilRemaining = building.oilRemaining || 0;

  building.oilRemaining = previousOilRemaining - oilConsumed;

  building.crafting = {
    name: action.item,
    boost: { Oil: oilConsumed },
    readyAt: getReadyAt({
      buildingName: requiredBuilding,
      item: action.item,
      bumpkin,
      createdAt,
      game: stateCopy,
    }),
  };

  return stateCopy;
}
