import React from "react";

import { PIXEL_SCALE } from "features/game/lib/constants";

import npc from "assets/events/valentine/npcs/valentin_goblin.gif";

import { MapPlacement } from "features/game/expansion/components/MapPlacement";

export const ValentinGoblin: React.FC = () => {
  return (
    <MapPlacement x={7.5} y={-4.2} height={1} width={1}>
      <div className="relative w-full h-full">
        <img
          src={npc}
          className="absolute"
          style={{
            width: `${PIXEL_SCALE * 112}px`,
            right: `${PIXEL_SCALE * 8}px`,
            bottom: `${PIXEL_SCALE * 6}px`,
          }}
        />
      </div>
    </MapPlacement>
  );
};
