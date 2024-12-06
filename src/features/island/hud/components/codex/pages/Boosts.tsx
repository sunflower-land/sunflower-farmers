import { useActor } from "@xstate/react";
import { Label } from "components/ui/Label";
import { InnerPanel } from "components/ui/Panel";
import { SquareIcon } from "components/ui/SquareIcon";
import { Context } from "features/game/GameProvider";
import { isCollectibleActive } from "features/game/lib/collectibleBuilt";
import { pixelDarkBorderStyle } from "features/game/lib/style";
import { isWearableActive } from "features/game/lib/wearables";
import { BumpkinItem, ITEM_IDS } from "features/game/types/bumpkin";
import { BUMPKIN_ITEM_BUFF_LABELS } from "features/game/types/bumpkinItemBuffs";
import { COLLECTIBLE_BUFF_LABELS } from "features/game/types/collectibleItemBuffs";
import { CollectibleName } from "features/game/types/craftables";
import { getKeys } from "features/game/types/decorations";
import { getImageUrl } from "lib/utils/getImageURLS";
import React, { useContext } from "react";

export const Boosts: React.FC = () => {
  const { gameService } = useContext(Context);
  const [
    {
      context: { state },
    },
  ] = useActor(gameService);
  const wearableBuffs = getKeys(BUMPKIN_ITEM_BUFF_LABELS);
  const { activeWearableBuffs, inactiveWearableBuffs } = wearableBuffs.reduce(
    (acc, wearable) => {
      isWearableActive({ game: state, name: wearable })
        ? acc.activeWearableBuffs.push(wearable)
        : acc.inactiveWearableBuffs.push(wearable);
      return acc;
    },
    {
      activeWearableBuffs: [] as BumpkinItem[],
      inactiveWearableBuffs: [] as BumpkinItem[],
    },
  );

  const collectibleBuffs = getKeys(COLLECTIBLE_BUFF_LABELS);
  const { activeCollectibleBuffs, inactiveCollectibleBuffs } =
    collectibleBuffs.reduce(
      (acc, collectible) => {
        isCollectibleActive({
          game: state,
          name: collectible as CollectibleName,
        })
          ? acc.activeCollectibleBuffs.push(collectible as CollectibleName)
          : acc.inactiveCollectibleBuffs.push(collectible as CollectibleName);
        return acc;
      },
      {
        activeCollectibleBuffs: [] as CollectibleName[],
        inactiveCollectibleBuffs: [] as CollectibleName[],
      },
    );

  return (
    <InnerPanel className="overflow-x-auto scrollable">
      <Label type={"default"} className="mb-1">
        {`Boosts currently active`}
      </Label>
      <div className="flex flex-row flex-wrap">
        {activeWearableBuffs.map((wearable) => {
          const {
            labelType,
            boostedItemIcon,
            boostTypeIcon,
            shortDescription,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          } = BUMPKIN_ITEM_BUFF_LABELS[wearable]!;
          return (
            <div key={wearable} className="mb-1 mr-1">
              <div
                className="bg-brown-600 cursor-pointer relative mb-1"
                style={{
                  ...pixelDarkBorderStyle,
                }}
              >
                <SquareIcon icon={getImageUrl(ITEM_IDS[wearable])} width={85} />
              </div>
              <Label
                type={labelType}
                icon={boostTypeIcon}
                secondaryIcon={boostedItemIcon}
              >
                {shortDescription}
              </Label>
            </div>
          );
        })}
      </div>
    </InnerPanel>
  );
};
