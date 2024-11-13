import { useActor } from "@xstate/react";
import confetti from "canvas-confetti";
import { Box } from "components/ui/Box";
import { Button } from "components/ui/Button";
import { Label } from "components/ui/Label";
import { Modal } from "components/ui/Modal";
import { Panel } from "components/ui/Panel";
import Decimal from "decimal.js-light";
import {
  RestockItems,
  RestockNPC,
} from "features/game/events/landExpansion/enhancedRestock";
import {
  nextShipmentAt,
  canRestockShipment,
  SHIPMENT_STOCK,
} from "features/game/events/landExpansion/shipmentRestocked";
import { Context } from "features/game/GameProvider";
import { StockableName, INITIAL_STOCK } from "features/game/lib/constants";
import { ITEM_DETAILS } from "features/game/types/images";
import { SEEDS } from "features/game/types/seeds";
import { WORKBENCH_TOOLS, TREASURE_TOOLS } from "features/game/types/tools";
import { CROP_LIFECYCLE } from "features/island/plots/lib/plant";
import { hasFeatureAccess } from "lib/flags";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { useCountdown } from "lib/utils/hooks/useCountdown";
import React, { useContext, useState } from "react";

import stockIcon from "assets/icons/stock.webp";
import { TimerDisplay } from "features/retreat/components/auctioneer/AuctionDetails";
import { NPC_WEARABLES } from "lib/npcs";
import { EnhancedRestockModal } from "./EnhancedRestock";
import { RestockModal } from "./Restock";

export const Restock: React.FC<{ npc: RestockNPC }> = ({ npc }) => {
  const { t } = useAppTranslation();
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showEnhancedConfirm, setShowEnhancedConfirm] = useState(false);

  const hasGemExperiment = hasFeatureAccess(
    gameState.context.state,
    "GEM_BOOSTS",
  );

  const hasEnhancedRestockAccess = hasFeatureAccess(
    gameState.context.state,
    "ENHANCED_RESTOCK",
  );

  const shipmentAt = useCountdown(
    nextShipmentAt({ game: gameState.context.state }),
  );

  const { ...shipmentTime } = shipmentAt;
  const shipmentIsReady = canRestockShipment({ game: gameState.context.state });

  const showShipment = hasGemExperiment && shipmentIsReady;
  const { shopName } = RestockItems[npc];

  if (showShipment) {
    return (
      <>
        <Button className="relative" onClick={() => setShowConfirm(true)}>
          <div className="flex items-center h-4 ">
            <p>{t("restock")}</p>
            <img src={stockIcon} className="h-6 absolute right-1 top-0" />
          </div>
        </Button>
        <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
          <Panel className="sm:w-4/5 m-auto">
            <ExperimentRestockModal onClose={() => setShowConfirm(false)} />
          </Panel>
        </Modal>
      </>
    );
  }

  return (
    <>
      {hasGemExperiment && (
        <>
          <div className="flex justify-center items-center">
            {/* <img src={stockIcon} className="h-5 mr-1" /> */}
            <p className="text-xxs">{t("gems.nextFreeShipment")}</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={stockIcon} className="h-5 mr-1" />
            <TimerDisplay time={shipmentTime} />
          </div>
          <div className="my-1 flex flex-col mb-1 flex-1 items-center justify-end">
            <div className="flex items-center"></div>
          </div>
        </>
      )}
      {hasEnhancedRestockAccess && (
        <>
          <Button
            className="mt-1 relative h-auto"
            onClick={() => setShowEnhancedConfirm(true)}
          >
            <div className="flex items-center h-4 ">
              <p className="mr-1">{`${t("restock")} ${shopName}`}</p>
              <img
                src={ITEM_DETAILS["Gem"].image}
                className="h-5 absolute right-1 top-1"
              />
            </div>
          </Button>
          <Modal
            show={showEnhancedConfirm}
            onHide={() => setShowEnhancedConfirm(false)}
          >
            <Panel
              className="sm:w-4/5 m-auto"
              bumpkinParts={NPC_WEARABLES[npc]}
            >
              <EnhancedRestockModal
                onClose={() => setShowEnhancedConfirm(false)}
                npc={npc}
              />
            </Panel>
          </Modal>
        </>
      )}
      <Button
        className="mt-1 relative h-auto"
        onClick={() => setShowConfirm(true)}
      >
        <div className="flex items-center h-4">
          <p className="mr-1">{`Restock all`}</p>
          <img
            src={ITEM_DETAILS["Gem"].image}
            className="h-5 absolute right-1 top-1"
          />
        </div>
      </Button>
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Panel className="sm:w-4/5 m-auto" bumpkinParts={NPC_WEARABLES[npc]}>
          <RestockModal onClose={() => setShowConfirm(false)} />
        </Panel>
      </Modal>
    </>
  );
};

const ExperimentRestockModal: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const { t } = useAppTranslation();

  const { gameService, showAnimations } = useContext(Context);
  const [gameState] = useActor(gameService);

  const replenish = () => {
    gameService.send("shipment.restocked");

    if (showAnimations) confetti();
    onClose();
  };

  const getShipmentAmount = (item: StockableName, amount: number): Decimal => {
    const totalStock = INITIAL_STOCK(gameState.context.state)[item];
    const remainingStock =
      gameState.context.state.stock[item] ?? new Decimal(0);
    // If shipment amount will exceed total stock
    if (remainingStock.add(amount).gt(totalStock)) {
      // return the difference between total and remaining stock
      return totalStock.sub(remainingStock);
    } else {
      // else return shipment stock
      return new Decimal(amount);
    }
  };

  const restockTools = Object.entries(SHIPMENT_STOCK)
    .filter((item) => item[0] in { ...WORKBENCH_TOOLS, ...TREASURE_TOOLS })
    .filter(([item, amount]) => {
      const shipmentAmount = getShipmentAmount(item as StockableName, amount);
      return shipmentAmount.gt(0);
    });

  const restockSeeds = Object.entries(SHIPMENT_STOCK)
    .filter((item) => item[0] in SEEDS())
    .filter(([item, amount]) => {
      const shipmentAmount = getShipmentAmount(item as StockableName, amount);
      return shipmentAmount.gt(0);
    });

  const restockIsEmpty = [...restockSeeds, ...restockTools].length <= 0;

  return (
    <>
      {restockIsEmpty ? (
        <div className="p-1">
          <Label type="danger" className="mb-2" icon={stockIcon}>
            {t("gems.noShipment")}
          </Label>
          <p className="text-sm mb-2">{t("gems.buyStock")}</p>
        </div>
      ) : (
        <div className="p-1">
          <Label type="default" className="mb-2" icon={stockIcon}>
            {t("gems.shipment.arrived")}
          </Label>
          <p className="text-sm mb-2">{t("gems.shipment.success")}</p>
        </div>
      )}
      <div className="mt-1 h-40 overflow-y-auto overflow-x-hidden scrollable pl-1">
        {restockTools.length > 0 && (
          <Label
            icon={ITEM_DETAILS.Axe.image}
            type="default"
            className="ml-2 mb-1"
          >
            {t("tools")}
          </Label>
        )}
        <div className="flex flex-wrap mb-2">
          {restockTools.map(([item, amount]) => {
            const shipmentAmount = getShipmentAmount(
              item as StockableName,
              amount,
            );
            return (
              <Box
                key={item}
                count={shipmentAmount}
                image={ITEM_DETAILS[item as StockableName].image}
              />
            );
          })}
        </div>
        {restockSeeds.length > 0 && (
          <Label
            icon={CROP_LIFECYCLE.Sunflower.seed}
            type="default"
            className="ml-2 mb-1"
          >
            {t("seeds")}
          </Label>
        )}
        <div className="flex flex-wrap mb-2">
          {restockSeeds.map(([item, amount]) => {
            const shipmentAmount = getShipmentAmount(
              item as StockableName,
              amount,
            );
            return (
              <Box
                key={item}
                count={shipmentAmount}
                image={ITEM_DETAILS[item as StockableName].image}
              />
            );
          })}
        </div>
      </div>
      {!restockIsEmpty && (
        <>
          <p className="text-xs p-1 pb-1.5 italic">
            {t("gems.restockToMaxStock")}
          </p>
          <p className="text-xs p-1 pb-1.5 italic">
            {`(${t("gems.shipment.useGems")})`}
          </p>
        </>
      )}

      <div className="flex">
        <Button className="mr-1" onClick={onClose}>
          {t("close")}
        </Button>
        <Button onClick={replenish} disabled={restockIsEmpty}>
          {t("restock")}
        </Button>
      </div>
    </>
  );
};
