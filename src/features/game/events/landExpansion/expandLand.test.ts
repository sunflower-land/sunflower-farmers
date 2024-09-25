import { INITIAL_BUMPKIN, TEST_FARM } from "features/game/lib/constants";
import { expandLand } from "./expandLand";
import Decimal from "decimal.js-light";
import { BB_TO_GEM_RATION } from "features/game/types/game";

describe("expandLand", () => {
  it("requires player has sufficient coins", () => {
    expect(() =>
      expandLand({
        action: {
          type: "land.expanded",
          farmId: 0,
        },
        state: {
          ...TEST_FARM,
          bumpkin: {
            ...INITIAL_BUMPKIN,
            experience: 1000000000,
          },
          inventory: {
            "Basic Land": new Decimal(9),
            Wood: new Decimal(100),
            Stone: new Decimal(50),
            Iron: new Decimal(10),
            Gold: new Decimal(5),
            Crimstone: new Decimal(12),
            Oil: new Decimal(10),
            Gem: new Decimal(3 * BB_TO_GEM_RATION),
          },
          island: {
            type: "desert",
          },
        },
      }),
    ).toThrow("Insufficient coins");
  });

  it("subtracts coins", () => {
    const state = expandLand({
      action: {
        type: "land.expanded",
        farmId: 0,
      },
      state: {
        ...TEST_FARM,
        bumpkin: {
          ...INITIAL_BUMPKIN,
          experience: 1000000000,
        },
        inventory: {
          "Basic Land": new Decimal(9),
          Wood: new Decimal(100),
          Stone: new Decimal(50),
          Iron: new Decimal(10),
          Gold: new Decimal(5),
          Crimstone: new Decimal(12),
          Oil: new Decimal(10),
          Gem: new Decimal(3 * BB_TO_GEM_RATION),
        },
        coins: 325,
        island: {
          type: "desert",
        },
      },
    });

    expect(state.coins).toEqual(5);
  });
});
