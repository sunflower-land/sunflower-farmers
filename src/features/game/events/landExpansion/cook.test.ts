import "lib/__mocks__/configMock";
import Decimal from "decimal.js-light";
import { INITIAL_BUMPKIN, TEST_FARM } from "features/game/lib/constants";
import { COOKABLES } from "features/game/types/consumables";
import { GameState, PlacedItem } from "features/game/types/game";
import {
  cook,
  getCookingOilBoost,
  getOilConsumption,
  getReadyAt,
} from "./cook";

const GAME_STATE: GameState = {
  ...TEST_FARM,
  balance: new Decimal(0),
  inventory: {},
};

describe("cook", () => {
  it("does not cook if building does not exist", () => {
    expect(() =>
      cook({
        state: {
          ...GAME_STATE,
          buildings: {},
        },
        action: {
          type: "recipe.cooked",
          item: "Boiled Eggs",
          buildingId: "123",
        },
      })
    ).toThrow(`Required building does not exist`);
  });

  it("does not cook if something is already cooking", () => {
    expect(() =>
      cook({
        state: {
          ...GAME_STATE,
          buildings: {
            "Fire Pit": [
              {
                coordinates: {
                  x: 2,
                  y: 3,
                },
                readyAt: 1660563190206,
                createdAt: 1660563160206,
                id: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
                crafting: {
                  name: "Boiled Eggs",
                  readyAt: Date.now() + 60 * 1000,
                },
              },
            ],
          },
        },
        action: {
          type: "recipe.cooked",
          item: "Boiled Eggs",
          buildingId: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
        },
      })
    ).toThrow("Cooking already in progress");
  });

  it("does not cook if player does not have all the ingredients", () => {
    expect(() =>
      cook({
        state: {
          ...GAME_STATE,
          inventory: {},
          buildings: {
            "Fire Pit": [
              {
                coordinates: {
                  x: 2,
                  y: 3,
                },
                readyAt: 1660563190206,
                createdAt: 1660563160206,
                id: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
              },
            ],
          },
        },
        action: {
          type: "recipe.cooked",
          item: "Boiled Eggs",
          buildingId: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
        },
      })
    ).toThrow("Insufficient ingredient: Egg");
  });

  it("subtracts required ingredients from inventory", () => {
    const state = cook({
      state: {
        ...GAME_STATE,
        inventory: { Egg: new Decimal(22) },
        buildings: {
          "Fire Pit": [
            {
              coordinates: {
                x: 2,
                y: 3,
              },
              readyAt: 1660563190206,
              createdAt: 1660563160206,
              id: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
            },
          ],
        },
      },
      action: {
        type: "recipe.cooked",
        item: "Boiled Eggs",
        buildingId: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
      },
    });

    expect(state.inventory["Egg"]).toEqual(new Decimal(17));
  });

  it("does not affect existing inventory", () => {
    const state = cook({
      state: {
        ...GAME_STATE,
        inventory: {
          Egg: new Decimal(22),
          Radish: new Decimal(2),
          Gold: new Decimal(4),
        },
        buildings: {
          "Fire Pit": [
            {
              coordinates: {
                x: 2,
                y: 3,
              },
              readyAt: 1660563190206,
              createdAt: 1660563160206,
              id: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
            },
          ],
        },
      },
      action: {
        type: "recipe.cooked",
        item: "Boiled Eggs",
        buildingId: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
      },
    });

    expect(state.inventory["Radish"]).toEqual(new Decimal(2));
    expect(state.inventory["Gold"]).toEqual(new Decimal(4));
  });

  it("adds the crafting state to the building data structure", () => {
    const state = cook({
      state: {
        ...GAME_STATE,
        inventory: {
          Egg: new Decimal(20),
        },
        buildings: {
          "Fire Pit": [
            {
              coordinates: {
                x: 2,
                y: 3,
              },
              readyAt: 1660563190206,
              createdAt: 1660563160206,
              id: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
            },
          ],
        },
      },
      action: {
        type: "recipe.cooked",
        item: "Boiled Eggs",
        buildingId: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
      },
    });

    expect(state.buildings["Fire Pit"]?.[0].crafting).toEqual(
      expect.objectContaining({
        name: "Boiled Eggs",
        readyAt: expect.any(Number),
      })
    );
  });

  it("subtracts oil from building", () => {
    const state = cook({
      state: {
        ...GAME_STATE,
        inventory: {
          Egg: new Decimal(20),
        },
        buildings: {
          "Fire Pit": [
            {
              coordinates: {
                x: 2,
                y: 3,
              },
              readyAt: 1000,
              createdAt: 1000,
              id: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
              oilRemaining: 10,
            },
          ],
        },
      },
      action: {
        type: "recipe.cooked",
        item: "Boiled Eggs",
        buildingId: "64eca77c-10fb-4088-a71f-3743b2ef6b16",
      },
    });

    const oilconsumed = getOilConsumption("Fire Pit", "Boiled Eggs");
    expect(state.buildings["Fire Pit"]?.[0].oilRemaining).toEqual(
      10 - oilconsumed
    );
  });
});

describe("getReadyAt", () => {
  it("applies 10% speed boost with Rush Hour skill", () => {
    const now = Date.now();

    const time = getReadyAt({
      buildingName: "Fire Pit",
      item: "Boiled Eggs",
      bumpkin: { ...INITIAL_BUMPKIN, skills: { "Rush Hour": 1 } },
      createdAt: now,
      game: {
        ...TEST_FARM,
        bumpkin: { ...INITIAL_BUMPKIN, skills: { "Rush Hour": 1 } },
      },
    });

    const boost = COOKABLES["Boiled Eggs"].cookingSeconds * 0.1;

    const readyAt =
      now + (COOKABLES["Boiled Eggs"].cookingSeconds - boost) * 1000;

    expect(time).toEqual(readyAt);
  });

  it("applies 10% speed boost with Rush Hour skill", () => {
    const now = Date.now();

    const time = getReadyAt({
      buildingName: "Fire Pit",
      item: "Boiled Eggs",
      bumpkin: {
        ...INITIAL_BUMPKIN,
        equipped: { ...INITIAL_BUMPKIN.equipped, hat: "Luna's Hat" },
      },
      game: {
        ...TEST_FARM,
        bumpkin: {
          ...INITIAL_BUMPKIN,
          equipped: { ...INITIAL_BUMPKIN.equipped, hat: "Luna's Hat" },
        },
      },

      createdAt: now,
    });

    const boost = COOKABLES["Boiled Eggs"].cookingSeconds * 0.5;

    const readyAt =
      now + (COOKABLES["Boiled Eggs"].cookingSeconds - boost) * 1000;

    expect(time).toEqual(readyAt);
  });

  it("applies Time Warp Totem", () => {
    const now = Date.now();

    const time = getReadyAt({
      buildingName: "Fire Pit",
      item: "Boiled Eggs",
      bumpkin: INITIAL_BUMPKIN,
      game: {
        ...TEST_FARM,
        collectibles: {
          "Time Warp Totem": [
            {
              id: "123",
              createdAt: now,
              coordinates: { x: 1, y: 1 },
              readyAt: now - 5 * 60 * 1000,
            },
          ],
        },
      },
      createdAt: now,
    });

    const boost = COOKABLES["Boiled Eggs"].cookingSeconds * 0.5;

    const readyAt =
      now + (COOKABLES["Boiled Eggs"].cookingSeconds - boost) * 1000;

    expect(time).toEqual(readyAt);
  });

  it("applies desert gnome boost", () => {
    const now = Date.now();

    const time = getReadyAt({
      buildingName: "Fire Pit",
      item: "Boiled Eggs",
      bumpkin: INITIAL_BUMPKIN,
      createdAt: now,
      game: {
        ...TEST_FARM,
        collectibles: {
          "Desert Gnome": [
            {
              coordinates: { x: 1, y: 1 },
              createdAt: Date.now(),
              id: "1",
              readyAt: Date.now(),
            },
          ],
        },
      },
    });

    const boost = COOKABLES["Boiled Eggs"].cookingSeconds * 0.1;

    const readyAt =
      now + (COOKABLES["Boiled Eggs"].cookingSeconds - boost) * 1000;

    expect(time).toEqual(readyAt);
  });

  it("boosts Fire Pit time by 20% with enough oil to finish cooking", () => {
    const now = Date.now();
    const FirePit = {
      coordinates: { x: 1, y: 1 },
      createdAt: Date.now(),
      id: "1",
      readyAt: Date.now(),
      oilRemaining: 10,
    };

    const result = getReadyAt({
      buildingName: "Fire Pit",
      item: "Boiled Eggs",
      bumpkin: INITIAL_BUMPKIN,
      createdAt: now,
      game: {
        ...TEST_FARM,
        buildings: {
          "Fire Pit": [FirePit],
        },
      },
    });

    const readyAt = now + COOKABLES["Boiled Eggs"].cookingSeconds * 0.8 * 1000;

    expect(result).toEqual(readyAt);
  });
});

describe("getCookingOilBoost", () => {
  it("returns 60 minutes for Boiled Egg if no oil", () => {
    const kitchen: PlacedItem = {
      createdAt: Date.now(),
      id: "1",
      readyAt: 0,
      coordinates: { x: 0, y: 0 },
    };
    const time = getCookingOilBoost(
      "Kitchen",
      "Boiled Eggs",
      TEST_FARM
    ).timeToCook;

    expect(time).toEqual(60 * 60);
  });
  it("boosts kitchen time by 20% with oil", () => {
    const kitchen: PlacedItem = {
      coordinates: { x: 0, y: 0 },
      createdAt: Date.now(),
      id: "1",
      readyAt: 0,
      oilRemaining: 1,
    };
    const time = getCookingOilBoost(
      "Kitchen",
      "Boiled Eggs",
      TEST_FARM
    ).timeToCook;

    expect(time).toEqual(60 * 60 * 0.8);
  });

  it("partial boost if oil is less than cooking required oil", () => {
    const deli: PlacedItem = {
      coordinates: { x: 0, y: 0 },
      createdAt: Date.now(),
      id: "1",
      readyAt: 0,
      oilRemaining: 6,
    };
    const boost = getCookingOilBoost("Deli", "Fermented Carrots", TEST_FARM);

    // Deli consumption is 12 oil per day
    // Deli boost is 0.4 (40% speed boost, meaning 60% of the original time)
    // Full boosted time will be 14.4 hours (86400 * 0.6 = 51840 seconds)
    // With half the oil (6 out of 12), the boost should be half as effective (20% boost)
    // Expected time = 86400 * 0.8 = 69120 seconds = 19.2 hours
    expect(boost.timeToCook).toEqual(60 * 60 * 19.2);
    expect(boost.oilConsumed).toEqual(6);
  });
});

describe("getOilConsumption", () => {
  it("consumes 1 oil for Boiled Egg", () => {
    const oil = getOilConsumption("Deli", "Fermented Carrots");

    expect(oil).toEqual(12);
  });

  it("consumes 20 oil for Parsnip Cake", () => {
    const oil = getOilConsumption("Bakery", "Parsnip Cake");

    expect(oil).toEqual(10);
  });
});
