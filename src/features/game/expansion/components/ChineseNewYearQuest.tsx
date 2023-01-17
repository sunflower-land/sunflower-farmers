import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import npc from "assets/npcs/dragon_hat_npc.gif";
import shadow from "assets/npcs/shadow.png";
import envelopes from "assets/icons/red_envelope.png";
import island from "assets/events/chinese-new-year/chinese_island.png";

import { GRID_WIDTH_PX, PIXEL_SCALE } from "features/game/lib/constants";

import { Quest } from "./Quest";
import { Equipped } from "features/game/types/bumpkin";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";

import luckySign from "assets/quest/luck_sign.png";

const resourceToFindRedEnvelopes: { [key: number]: string } = {
  17: "beetroots",
  22: "trees",
  23: "cauliflowers",
  24: "potatoes",
  25: "parsnips",
  26: "cabbages",
  27: "sunflowers",
};

const todaysFind = resourceToFindRedEnvelopes[new Date().getDate()];

const ModalEventComing = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <img
          src={luckySign}
          alt="lucky sign"
          className="mb-4"
          style={{ width: `${PIXEL_SCALE * 31}px` }}
        />
      </div>
      <p className="mb-2 text-sm text-left">
        We are working hard to organise a beautiful Spring Festival for all
        farmers.
      </p>
      <p className="mb-2 text-sm text-left">
        {`The festivities start on ${new Date(
          "2023-01-21T00:00:00+08:00"
        ).toDateString()}`}
      </p>
    </>
  );
};

const ModalDescription = () => {
  return (
    <>
      <div className="flex justify-center mb-3">
        <img
          src={envelopes}
          className="img-highlight"
          style={{
            height: `${PIXEL_SCALE * 20}px`,
          }}
        />
      </div>
      <p className="mb-2 text-sm">
        Amid the sound of firecrackers, a year has come to an end. To celebrate
        the New Year, some special red envelopes have been hidden among the
        crops and trees.
      </p>
      <p className="mb-4 text-sm">
        There are rumours a few lucky farmers are finding these envelopes among
        their <span className="underline">{todaysFind}</span> today.
      </p>
      <p className="mb-2 text-sm text-center">萬事如意</p>
    </>
  );
};

const QuestCompletion = () => {
  return (
    <div className="p-2">
      <p className="mb-2">
        Wow, you are really lucky finding all these Red Envelopes!
      </p>
      <p>
        {`I have no more gifts for you. Don't forget to wear your new
          items!`}
      </p>
    </div>
  );
};

export const ChineseNewYearQuest: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const bumpkin: Partial<Equipped> = {
    body: "Beige Farmer Potion",
    hair: "Basic Hair",
    pants: "Blue Suspenders",
    shirt: "Blue Farmer Shirt",
    tool: "Sword",
    shoes: "Black Farmer Boots",
    background: "Farm Background",
    // hat: "Lion Dance Mask",
  };

  return (
    <>
      <img
        src={island}
        className="absolute"
        style={{
          width: `${PIXEL_SCALE * 226}px`,
          bottom: `${GRID_WIDTH_PX * 10}px`,
          left: `${GRID_WIDTH_PX * -21}px`,
        }}
      />
      <div
        className="absolute z-20"
        style={{
          top: `${GRID_WIDTH_PX * 24}px`,
          left: `${GRID_WIDTH_PX * -12}px`,
        }}
      >
        <img
          src={shadow}
          className="absolute z-10"
          style={{
            width: `${PIXEL_SCALE * 15}px`,
            bottom: `${PIXEL_SCALE * -2}px`,
          }}
        />
        <img
          src={npc}
          className="relative left-0 top-0 cursor-pointer hover:img-highlight z-20"
          onClick={() => setShowModal(true)}
          style={{
            width: `${PIXEL_SCALE * 16}px`,
          }}
        />
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {!todaysFind ? (
          <CloseButtonPanel
            title="The New Year is coming!"
            bumpkinParts={bumpkin}
          >
            {ModalEventComing()}
          </CloseButtonPanel>
        ) : (
          <Quest
            quests={["Chinese New Year Quest 1", "Chinese New Year Quest 2"]}
            onClose={() => setShowModal(false)}
            questTitle="Happy Chinese New Year!"
            questDescription={ModalDescription()}
            bumpkinParts={bumpkin}
            questCompletionScreen={QuestCompletion()}
          />
        )}
      </Modal>
    </>
  );
};
