import React, { useContext, useEffect, useState } from "react";
import { Button } from "components/ui/Button";
import { ITEM_DETAILS } from "features/game/types/images";
import { Context } from "features/game/GameProvider";
import { useActor } from "@xstate/react";
import { ModalContext } from "features/game/components/modal/ModalProvider";
import { SquareIcon } from "components/ui/SquareIcon";
import { PIXEL_SCALE } from "features/game/lib/constants";
import ticket from "assets/icons/block_buck_detailed.png";
import stockIcon from "assets/icons/stock.webp";
import { gameAnalytics } from "lib/gameAnalytics";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { ConfirmationModal } from "components/ui/ConfirmationModal";
import { NPC_WEARABLES } from "lib/npcs";
import { BB_TO_GEM_RATIO } from "features/game/types/game";
import { hasFeatureAccess } from "lib/flags";
import { TimerDisplay } from "features/retreat/components/auctioneer/AuctionDetails";
import { useCountdown } from "lib/utils/hooks/useCountdown";
import {
  canRestockShipment,
  nextShipmentAt,
} from "features/game/events/landExpansion/shipmentRestocked";
import { Label } from "components/ui/Label";
import { Modal } from "components/ui/Modal";
import { Panel } from "components/ui/Panel";
import confetti from "canvas-confetti";

interface Props {
  onClose: () => void;
}

export const Restock: React.FC<Props> = ({ onClose }) => {
  const { t } = useAppTranslation();
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const [showConfirm, setShowConfirm] = useState(false);
  const { openModal } = useContext(ModalContext);

  const canRestock = gameState.context.state.inventory["Gem"]?.gte(1);

  const hasGemExperiment = hasFeatureAccess(
    gameState.context.state,
    "GEM_EXPERIMENT",
  );

  const shipmentAt = useCountdown(
    nextShipmentAt({ game: gameState.context.state }),
  );

  const { days, ...shipmentTime } = shipmentAt;
  const shipmentIsReady = canRestockShipment({ game: gameState.context.state });

  const showShipment = hasGemExperiment && shipmentIsReady;

  console.log({ shipmentIsReady, showShipment, shipmentAt, shipmentTime });
  return (
    <>
      {showShipment ? (
        <Button className="relative" onClick={() => setShowConfirm(true)}>
          <div className="flex items-center h-4 ">
            <p>{t("restock")}</p>
            <img src={stockIcon} className="h-6 absolute right-1 top-0" />
          </div>
        </Button>
      ) : (
        <>
          <div className="flex justify-center items-center">
            {/* <img src={stockIcon} className="h-5 mr-1" /> */}
            <p className="text-xxs">Next stock shipment:</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={stockIcon} className="h-5 mr-1" />
            <TimerDisplay time={shipmentTime} />
          </div>
          <div className="my-1 flex flex-col mb-1 flex-1 items-center justify-end">
            <div className="flex items-center"></div>
          </div>
          <Button
            className="mt-1 relative"
            onClick={() => setShowConfirm(true)}
          >
            <div className="flex items-center h-4 ">
              <p>{t("restock")}</p>
              <img
                src={ITEM_DETAILS["Block Buck"].image}
                className="h-5 absolute right-1 top-1"
              />
            </div>
          </Button>
        </>
      )}

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Panel className="sm:w-4/5 m-auto" bumpkinParts={NPC_WEARABLES.betty}>
          <RestockModal onClose={() => setShowConfirm(false)} />
        </Panel>
      </Modal>
    </>
  );
};

const RestockModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { t } = useAppTranslation();
  const { openModal } = useContext(ModalContext);

  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const hasGemExperiment = hasFeatureAccess(
    gameState.context.state,
    "GEM_EXPERIMENT",
  );
  const shipmentIsReady = canRestockShipment({ game: gameState.context.state });
  const showShipment = hasGemExperiment && shipmentIsReady;

  const canRestock = gameState.context.state.inventory["Block Buck"]?.gte(1);

  const handleRestock = () => {
    if (!canRestock) {
      openModal("BUY_GEMS");
      return;
    }

    gameService.send("shops.restocked");

    gameAnalytics.trackSink({
      currency: "Gem",
      amount: 1 * BB_TO_GEM_RATIO,
      item: "Stock",
      type: "Fee",
    });

    onClose();
  };

  const replenish = () => {
    gameService.send("shipment.restocked");
    onClose();
    confetti();
  };

  if (shipmentIsReady) {
    return (
      <>
        <div className="p-1">
          <Label type="default" className="mb-2" icon={stockIcon}>
            Shipment has arrived
          </Label>
          <p className="text-sm mb-2">
            Woohoo, a free shipment of stock has just arrived to replenish the
            shops.
          </p>
        </div>
        <div className="flex">
          <Button className="mr-1" onClick={onClose}>
            Close
          </Button>
          <Button onClick={replenish}>Restock</Button>
        </div>
      </>
    );
  }

  const shipmentAt = useCountdown(
    nextShipmentAt({ game: gameState.context.state }),
  );

  const { days, ...shipmentTime } = shipmentAt;

  return (
    <>
      <div className="p-1">
        <Label type="danger" className="mb-2" icon={stockIcon}>
          Out of stock
        </Label>
        <div className="flex flex-wrap mb-2">
          <span className="mr-2">Next free shipment:</span>
          <TimerDisplay time={shipmentTime} />
        </div>

        <p className="mb-1">
          Would to like to replenish the shops now for 20 Gems?
        </p>
      </div>
      <div className="flex justify-content-around mt-2 space-x-1">
        <Button onClick={onClose}>{t("cancel")}</Button>
        <Button className="relative" onClick={handleRestock}>
          {t("restock")}
          <img
            src={ITEM_DETAILS["Gem"].image}
            className="h-5 absolute right-1 top-1"
          />
        </Button>
      </div>
    </>
  );
};
