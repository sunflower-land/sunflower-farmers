import { useActor } from "@xstate/react";
import { Button } from "components/ui/Button";
import { Label } from "components/ui/Label";
import { Context } from "features/game/GameProvider";
import {
  CONVERSATIONS,
  ConversationName,
} from "features/game/types/conversations";
import { getKeys } from "features/game/types/craftables";
import { NPCDialogue } from "features/game/types/game";
import { ITEM_DETAILS } from "features/game/types/images";
import React, { useContext, useState } from "react";

interface Props {
  conversationId: ConversationName;
}

const CONTENT_HEIGHT = 300;

export const Conversation: React.FC<Props> = ({ conversationId }) => {
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const [showReward, setShowReward] = useState(false);

  const acknowledge = () => {
    gameService.send({ type: "conversation.ended", id: conversationId });
  };

  const conversation = CONVERSATIONS[conversationId];

  const next = () => {
    if (conversation.reward) {
      setShowReward(true);
      return;
    }

    acknowledge();
  };
  const Content = () => {
    if (showReward && conversation.reward) {
      return (
        <>
          <p className="text-center">I've got something for you!</p>

          <div className="flex flex-col items-center">
            {getKeys(conversation.reward?.items).map((name) => (
              <img
                key={`${name}`}
                src={ITEM_DETAILS[name].image}
                className="mb-2 w-1/5 my-2 img-highlight"
              />
            ))}
          </div>

          {/* Text*/}
          <div>
            {getKeys(conversation.reward?.items).map((name) => (
              <p
                key={`${name}`}
                className="text-center text-sm mb-2"
              >{`${conversation.reward?.items[name]} x ${name}`}</p>
            ))}
          </div>

          <Button onClick={acknowledge}>Claim</Button>
        </>
      );
    }
    return (
      <>
        {conversation.content.map((content) => (
          <div className="mb-2">
            <p className="text-sm">{content.text}</p>
            {content.image && (
              <img
                src={content.image}
                className="w-full mx-auto rounded-md mt-1"
              />
            )}
          </div>
        ))}

        <Button onClick={next}>Got it</Button>
      </>
    );
  };

  return (
    <div>
      <div
        style={{ maxHeight: CONTENT_HEIGHT }}
        className="overflow-y-auto p-2 divide-brown-600 scrollable"
      >
        <Content />
      </div>
    </div>
  );
};
