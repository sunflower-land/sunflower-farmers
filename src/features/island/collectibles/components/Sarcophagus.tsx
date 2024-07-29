import React from "react";

import { PIXEL_SCALE } from "features/game/lib/constants";
import { ITEM_DETAILS } from "features/game/types/images";

export const Sarcophagus: React.FC = () => {
  return (
    <>
      <img
        src={ITEM_DETAILS.Sarcophagus.image}
        style={{
          width: `${PIXEL_SCALE * 18}px`,
          bottom: `${PIXEL_SCALE * 0}px`,
          left: `${PIXEL_SCALE * 0}px`,
        }}
        className="absolute"
        alt="Sarcophagus"
      />
    </>
  );
};
