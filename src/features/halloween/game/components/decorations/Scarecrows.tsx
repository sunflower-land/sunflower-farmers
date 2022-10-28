import React from "react";

import { GRID_WIDTH_PX } from "features/game/lib/constants";
import { Inventory } from "features/game/types/game";

import nancy from "assets/nfts/nancy.png";
import scarecrow from "assets/nfts/scarecrow.png";
import kuebiko from "assets/nfts/kuebiko.gif";
import { cursedScarecrowAudio } from "lib/utils/sfx";

// Only show 1 scarecrow at a time
export const Scarecrows: React.FC<{ inventory: Inventory }> = ({
  inventory,
}) => {
  if (inventory.Kuebiko) {
    return (
      <img
        style={{
          width: `${GRID_WIDTH_PX * 2}px`,
        }}
        src={kuebiko}
        onClick={() => {
          //Checks if Audio is playing, if false, plays the sound
          if (!cursedScarecrowAudio.playing()) {
            cursedScarecrowAudio.play();
          }
        }}
        className="absolute hover:img-highlight cursor-pointer"
        alt="Scarecrow"
      />
    );
  }

  if (inventory.Scarecrow) {
    return (
      <img
        style={{
          width: `${GRID_WIDTH_PX * 1.3}px`,
        }}
        src={scarecrow}
        onClick={() => {
          //Checks if Audio is playing, if false, plays the sound
          if (!cursedScarecrowAudio.playing()) {
            cursedScarecrowAudio.play();
          }
        }}
        className="absolute hover:img-highlight cursor-pointer"
        alt="Scarecrow"
      />
    );
  }

  if (inventory.Nancy) {
    return (
      <img
        style={{
          width: `${GRID_WIDTH_PX * 1.2}px`,
        }}
        src={nancy}
        onClick={() => {
          //Checks if Audio is playing, if false, plays the sound
          if (!cursedScarecrowAudio.playing()) {
            cursedScarecrowAudio.play();
          }
        }}
        className="absolute hover:img-highlight cursor-pointer"
        alt="Scarecrow"
      />
    );
  }

  return null;
};
