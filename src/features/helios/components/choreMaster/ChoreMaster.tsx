import React from "react";

import { PIXEL_SCALE } from "features/game/lib/constants";

import { Modal } from "react-bootstrap";
import { MapPlacement } from "features/game/expansion/components/MapPlacement";
import { NPC } from "features/island/bumpkin/components/DynamicMiniNFT";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { ChoreMasterModal } from "./components/ChoreMasterModal";

export const ChoreMaster: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <MapPlacement x={-8} y={-9} height={3} width={4}>
      <div
        className="relative w-full h-full cursor-pointer hover:img-highlight"
        onClick={handleClick}
      >
        <div
          className="absolute"
          style={{
            width: `${PIXEL_SCALE * 14}px`,
            left: `${PIXEL_SCALE * 19}px`,
            bottom: `${PIXEL_SCALE * 27}px`,
          }}
        >
          <NPC
            body="Beige Farmer Potion"
            shirt="Hawaiian Shirt"
            pants="Farmer Pants"
            hair="Sun Spots"
          />
        </div>
      </div>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <CloseButtonPanel
          bumpkinParts={{
            body: "Beige Farmer Potion",
            shirt: "Hawaiian Shirt",
            pants: "Farmer Pants",
            hair: "Sun Spots",
          }}
          onClose={() => setIsOpen(false)}
        >
          <ChoreMasterModal onClose={() => setIsOpen(false)} />
        </CloseButtonPanel>
      </Modal>
    </MapPlacement>
  );
};
