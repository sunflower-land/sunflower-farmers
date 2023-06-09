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
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="Red Maple"
      />
    </>
  );
};
