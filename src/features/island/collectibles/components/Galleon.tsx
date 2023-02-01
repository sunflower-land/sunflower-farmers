import React from "react";

import galleonCase from "assets/sfts/galleon_case.webp";
import { PIXEL_SCALE } from "features/game/lib/constants";

export const Galleon: React.FC = () => {
  return (
    <>
      <img
        src={galleonCase}
        style={{
          width: `${PIXEL_SCALE * 32}px`,
          bottom: 0,
        }}
        className="absolute"
        alt="Galleon"
      />
    </>
  );
};
