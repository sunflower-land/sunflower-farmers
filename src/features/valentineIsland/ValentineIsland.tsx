import { useActor } from "@xstate/react";
import background from "assets/events/valentine/land/valetine_island.png";
import boat from "assets/events/valentine/npcs/love_boat.png";
import { IslandTravel } from "features/game/expansion/components/travel/IslandTravel";
import { Context } from "features/game/GameProvider";
import { GRID_WIDTH_PX } from "features/game/lib/constants";
import { Hud } from "features/island/hud/Hud";
import { Section, useScrollIntoView } from "lib/utils/hooks/useScrollIntoView";
import React, { useContext, useLayoutEffect } from "react";

export const ValentineIsland: React.FC = () => {
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);
  const { state } = gameState.context;
  const { bumpkin } = state;

  const [scrollIntoView] = useScrollIntoView();

  useLayoutEffect(() => {
    // Start with island centered
    scrollIntoView(Section.ValentineIsland, "auto");
  }, []);

  // Load data
  return (
    <>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${21 * GRID_WIDTH_PX}px`,
          height: `${21 * GRID_WIDTH_PX}px`,
        }}
      >
        <img
          src={background}
          className="absolute inset-0 w-full h-full"
          id={Section.ValentineIsland}
        />

        <IslandTravel
          bumpkin={bumpkin}
          inventory={gameState.context.state.inventory}
          x={-8}
          y={-4.5}
          onTravelDialogOpened={() => gameService.send("SAVE")}
          isTravelAllowed={!gameState.matches("autosaving")}
          customBoat={boat}
          customWidth={54}
        />
      </div>
      <Hud isFarming={false} />
    </>
  );
};
