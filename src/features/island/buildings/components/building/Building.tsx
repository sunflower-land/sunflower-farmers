import React, { useContext, useEffect, useState } from "react";

import { BuildingName } from "features/game/types/buildings";
import { Bar, ResizableBar } from "components/ui/ProgressBar";
import { TimeLeftPanel } from "components/ui/TimeLeftPanel";
import useUiRefresher from "lib/utils/hooks/useUiRefresher";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { useSelector } from "@xstate/react";
import { MoveableComponent } from "features/island/collectibles/MovableComponent";
import { MachineState } from "features/game/lib/gameMachine";
import { Context } from "features/game/GameProvider";
import { BUILDING_COMPONENTS, READONLY_BUILDINGS } from "./BuildingComponents";
import { CookableName } from "features/game/types/consumables";
import { GameState, IslandType } from "features/game/types/game";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { useCountdown } from "lib/utils/hooks/useCountdown";
import { hasFeatureAccess } from "lib/flags";
import { SUNNYSIDE } from "assets/sunnyside";
import { Label } from "components/ui/Label";
import { TimerDisplay } from "features/retreat/components/auctioneer/AuctionDetails";
import { Button } from "components/ui/Button";
import { ITEM_DETAILS } from "features/game/types/images";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { Modal } from "components/ui/Modal";
import confetti from "canvas-confetti";
import { getInstantGems } from "features/game/events/landExpansion/speedUpRecipe";

interface Prop {
  name: BuildingName;
  id: string;
  index: number;
  readyAt: number;
  createdAt: number;
  craftingItemName?: CookableName;
  craftingReadyAt?: number;
  showTimers: boolean;
  x: number;
  y: number;
  island: IslandType;
}

export interface BuildingProps {
  buildingId: string;
  buildingIndex: number;
  craftingItemName?: CookableName;
  craftingReadyAt?: number;
  isBuilt?: boolean;
  onRemove?: () => void;
  island: IslandType;
}

const InProgressBuilding: React.FC<Prop> = ({
  name,
  id,
  index,
  readyAt,
  createdAt,
  showTimers,
  island,
}) => {
  const { t } = useAppTranslation();
  const { gameService } = useContext(Context);

  const BuildingPlaced = BUILDING_COMPONENTS[name];

  const [showModal, setShowModal] = useState(false);

  const totalSeconds = (readyAt - createdAt) / 1000;
  const secondsLeft = (readyAt - Date.now()) / 1000;

  useEffect(() => {
    // Just built, open up building state
    if (Date.now() - createdAt < 1000) {
      setShowModal(true);
    }
  }, []);

  const onSpeedUp = () => {
    gameService.send("building.spedUp", {
      name,
      id,
    });
    setShowModal(false);
    confetti();
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <CloseButtonPanel onClose={() => setShowModal(false)}>
          <Constructing
            name={name}
            createdAt={createdAt}
            readyAt={readyAt}
            onClose={() => setShowModal(false)}
            onInstantBuilt={onSpeedUp}
            state={gameService.getSnapshot().context.state}
          />
        </CloseButtonPanel>
      </Modal>

      <div
        className="w-full h-full cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="w-full h-full pointer-events-none opacity-50">
          <BuildingPlaced
            buildingId={id}
            buildingIndex={index}
            island={island}
          />
        </div>
        {showTimers && (
          <div
            className="absolute bottom-0 left-1/2"
            style={{
              marginLeft: `${PIXEL_SCALE * -8}px`,
            }}
          >
            <Bar
              percentage={(1 - secondsLeft / totalSeconds) * 100}
              type="progress"
            />
          </div>
        )}
      </div>
    </>
  );
};

const BuildingComponent: React.FC<Prop> = ({
  name,
  id,
  index,
  readyAt,
  createdAt,
  craftingItemName,
  craftingReadyAt,
  showTimers,
  x,
  y,
  island,
}) => {
  const BuildingPlaced = BUILDING_COMPONENTS[name];

  const inProgress = readyAt > Date.now();

  useUiRefresher({ active: inProgress });

  return (
    <>
      {inProgress ? (
        <InProgressBuilding
          key={id}
          name={name}
          id={id}
          index={index}
          readyAt={readyAt}
          createdAt={createdAt}
          showTimers={showTimers}
          x={x}
          y={y}
          island={island}
        />
      ) : (
        <BuildingPlaced
          buildingId={id}
          buildingIndex={index}
          craftingItemName={craftingItemName}
          craftingReadyAt={craftingReadyAt}
          isBuilt
          island={island}
        />
      )}
    </>
  );
};

const isLandscaping = (state: MachineState) => state.matches("landscaping");
const _island = (state: MachineState) => state.context.state.island.type;

const MoveableBuilding: React.FC<Prop> = (props) => {
  const { gameService } = useContext(Context);

  const landscaping = useSelector(gameService, isLandscaping);
  const island = useSelector(gameService, _island);
  if (landscaping) {
    const BuildingPlaced = READONLY_BUILDINGS(island)[props.name];

    const inProgress = props.readyAt > Date.now();

    // In Landscaping mode, use readonly building
    return (
      <MoveableComponent
        id={props.id}
        index={props.index}
        name={props.name}
        x={props.x}
        y={props.y}
      >
        {inProgress ? (
          <BuildingComponent {...props} />
        ) : (
          <BuildingPlaced buildingId={props.id} {...props} />
        )}
      </MoveableComponent>
    );
  }

  return <BuildingComponent {...props} />;
};

export const Building = React.memo(MoveableBuilding);

export const Constructing: React.FC<{
  state: GameState;
  onClose: () => void;
  onInstantBuilt: () => void;
  readyAt: number;
  createdAt: number;
  name: BuildingName;
}> = ({ state, onClose, onInstantBuilt, readyAt, createdAt, name }) => {
  const totalSeconds = (readyAt - createdAt) / 1000;
  const secondsTillReady = (readyAt - Date.now()) / 1000;

  const { days, ...ready } = useCountdown(readyAt ?? 0);

  const gems = getInstantGems({
    readyAt: readyAt as number,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() > readyAt) {
        onClose();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const speedUpAccess = hasFeatureAccess(state, "GEM_BOOSTS");

  return (
    <>
      <div className="p-1 ">
        <Label
          type="default"
          icon={SUNNYSIDE.icons.stopwatch}
        >{`In progress`}</Label>
        <p className="text-sm my-2">Your {name} will be ready soon!</p>
        <div className="flex items-center mb-1">
          <div>
            <div className="relative flex flex-col w-full">
              <div className="flex items-center gap-x-1">
                <ResizableBar
                  percentage={(1 - secondsTillReady! / totalSeconds) * 100}
                  type="progress"
                />
                <TimerDisplay time={ready} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <Button className="mr-1" onClick={onClose}>
          Close
        </Button>
        {speedUpAccess && (
          <Button
            disabled={!state.inventory.Gem?.gte(gems)}
            className="relative ml-1"
            onClick={onInstantBuilt}
          >
            Speed up
            <Label
              type={state.inventory.Gem?.gte(gems) ? "default" : "danger"}
              icon={ITEM_DETAILS.Gem.image}
              className="flex absolute right-0 top-0.5"
            >
              {gems}
            </Label>
          </Button>
        )}
      </div>
    </>
  );
};
