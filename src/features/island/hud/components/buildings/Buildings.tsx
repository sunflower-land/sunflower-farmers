import React, { useContext, useState } from "react";
import { useActor } from "@xstate/react";
import { Box } from "components/ui/Box";
import { Context } from "features/game/GameProvider";
import { ITEM_DETAILS } from "features/game/types/images";
import { BUILDINGS, BuildingName } from "features/game/types/buildings";
import { Button } from "components/ui/Button";
import { SplitScreenView } from "components/ui/SplitScreenView";
import { CraftingRequirements } from "components/ui/layouts/CraftingRequirements";

import lock from "assets/skills/lock.png";

import Decimal from "decimal.js-light";
import { SUNNYSIDE } from "assets/sunnyside";
import { Label } from "components/ui/Label";
import { ITEM_ICONS } from "../inventory/Chest";
import { getBumpkinLevel } from "features/game/lib/level";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { hasFeatureAccess } from "lib/flags";
import { hasRequiredIslandExpansion } from "features/game/lib/hasRequiredIslandExpansion";
import { IslandType } from "features/game/types/game";
import { capitalize } from "lib/utils/capitalize";

interface Props {
  onClose: () => void;
}

const VALID_BUILDINGS: BuildingName[] = [
  "Kitchen" as BuildingName,
  "Water Well" as BuildingName,
  "Bakery" as BuildingName,
  "Hen House" as BuildingName,
  "Deli" as BuildingName,
  "Smoothie Shack" as BuildingName,
  "Toolshed" as BuildingName,
  "Warehouse" as BuildingName,
  "Compost Bin" as BuildingName,
  "Turbo Composter" as BuildingName,
  "Premium Composter" as BuildingName,
  "Greenhouse" as BuildingName,
  "Crop Machine" as BuildingName,
].sort(
  (a, b) => BUILDINGS[a][0].unlocksAtLevel - BUILDINGS[b][0].unlocksAtLevel
);

export const Buildings: React.FC<Props> = ({ onClose }) => {
  const [selectedName, setSelectedName] = useState<BuildingName>("Water Well");
  const { gameService } = useContext(Context);
  const [
    {
      context: { state },
    },
  ] = useActor(gameService);
  const { inventory } = state;
  const { t } = useAppTranslation();
  const buildingBlueprints = BUILDINGS[selectedName];
  const buildingUnlockLevels = buildingBlueprints.map(
    ({ unlocksAtLevel }) => unlocksAtLevel
  );
  const buildingsInInventory = inventory[selectedName] || new Decimal(0);
  // Some buildings have multiple blueprints, so we need to check if the next blueprint is available else fallback to the first one
  const nextBlueprintIndex = buildingBlueprints[buildingsInInventory.toNumber()]
    ? buildingsInInventory.toNumber()
    : 0;
  const numOfBuildingAllowed = buildingUnlockLevels.filter(
    (level) => getBumpkinLevel(state.bumpkin?.experience ?? 0) >= level
  ).length;
  const nextLockedLevel = buildingUnlockLevels.find(
    (level) => getBumpkinLevel(state.bumpkin?.experience ?? 0) < level
  );

  const isAlreadyCrafted = inventory[selectedName]?.greaterThanOrEqualTo(
    BUILDINGS[selectedName].length
  );

  const ingredients = buildingBlueprints[0].ingredients.reduce(
    (acc, ingredient) => ({
      ...acc,
      [ingredient.item]: new Decimal(ingredient.amount),
    }),
    {}
  );

  const { coins } = buildingBlueprints[nextBlueprintIndex];

  const lessIngredients = () =>
    buildingBlueprints[nextBlueprintIndex].ingredients.some((ingredient) =>
      ingredient.amount?.greaterThan(inventory[ingredient.item] || 0)
    );

  const craft = () => {
    gameService.send("LANDSCAPE", {
      action: "building.constructed",
      placeable: selectedName,
      requirements: {
        coins,
        ingredients,
      },
    });

    onClose();
  };

  const getAction = () => {
    if (
      !hasRequiredIslandExpansion(
        state.island.type,
        buildingBlueprints[nextBlueprintIndex].requiredIsland
      )
    ) {
      return (
        <Label type="danger">
          {t("islandupgrade.requiredIsland", {
            islandType:
              buildingBlueprints[nextBlueprintIndex].requiredIsland === "spring"
                ? "Petal Paradise"
                : t("islandupgrade.otherIsland", {
                    island: capitalize(
                      buildingBlueprints[nextBlueprintIndex]
                        .requiredIsland as IslandType
                    ),
                  }),
          })}
        </Label>
      );
    }

    const hasMaxNumberOfBuildings =
      buildingsInInventory.gte(numOfBuildingAllowed);
    // Hasn't unlocked the first
    if (nextLockedLevel && hasMaxNumberOfBuildings)
      return (
        <div className="flex flex-col w-full justify-center">
          <div className="flex items-center justify-center ">
            <Label type="danger" icon={SUNNYSIDE.icons.player}>
              {t("warning.level.required", { lvl: nextLockedLevel })}
            </Label>
          </div>
        </div>
      );

    if (isAlreadyCrafted) {
      return <p className="text-xxs text-center mb-1">{t("alr.crafted")}</p>;
    }

    return (
      <Button
        disabled={lessIngredients() || state.coins < coins}
        onClick={craft}
      >
        {t("build")}
      </Button>
    );
  };

  return (
    <SplitScreenView
      panel={
        <CraftingRequirements
          gameState={state}
          details={{
            item: selectedName,
          }}
          requirements={{
            coins,
            resources: buildingBlueprints[
              nextBlueprintIndex
            ].ingredients.reduce(
              (acc, ingredient) => ({
                ...acc,
                [ingredient.item]: new Decimal(ingredient.amount),
              }),
              {}
            ),
          }}
          actionView={getAction()}
        />
      }
      content={
        <>
          {VALID_BUILDINGS.filter((name) => {
            if (name === "Crop Machine") {
              return hasFeatureAccess(state, "CROP_MACHINE");
            }

            return true;
          }).map((name: BuildingName) => {
            const blueprints = BUILDINGS[name];
            const inventoryCount = inventory[name] || new Decimal(0);
            const nextIndex = blueprints[inventoryCount.toNumber()]
              ? inventoryCount.toNumber()
              : 0;
            const isLocked =
              getBumpkinLevel(state.bumpkin?.experience ?? 0) <
              BUILDINGS[name][nextIndex].unlocksAtLevel;

            let secondaryIcon = undefined;
            if (isLocked) {
              secondaryIcon = lock;
            }

            if (inventory[name]?.greaterThanOrEqualTo(BUILDINGS[name].length)) {
              secondaryIcon = SUNNYSIDE.icons.confirm;
            }

            return (
              <Box
                isSelected={selectedName === name}
                key={name}
                onClick={() => setSelectedName(name)}
                image={
                  ITEM_ICONS(state.island.type)[name] ??
                  ITEM_DETAILS[name].image
                }
                secondaryImage={secondaryIcon}
                showOverlay={isLocked}
              />
            );
          })}
        </>
      }
    />
  );
};
