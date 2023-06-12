import React from "react";

import redMaple from "assets/decorations/red_maple.webp";
import { PIXEL_SCALE } from "features/game/lib/constants";

export const RedMaple: React.FC = () => {
  return (
    <>
      <img
        src={redMaple}
        style={{
          width: `${PIXEL_SCALE * 28}px`,
          bottom: `${PIXEL_SCALE * 1.5}px`,
        }}
        className="absolute left-1/2 -translate-x-1/2"
        alt="Red Maple"
      />
    </>
  );
};
