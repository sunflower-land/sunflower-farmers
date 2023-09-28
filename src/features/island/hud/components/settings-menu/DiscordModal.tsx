import React, { useContext, useState } from "react";

import { redirectOAuth } from "features/auth/actions/oauth";
import * as Auth from "features/auth/lib/Provider";
import budIcon from "src/assets/icons/bud.png";

import { useActor } from "@xstate/react";
import { Button } from "components/ui/Button";
import { InventoryItemName } from "features/game/types/game";
import { addDiscordRole, DiscordRole } from "features/game/actions/discordRole";
import { ITEM_DETAILS } from "features/game/types/images";
import { Context } from "features/game/GameProvider";
import { Modal } from "react-bootstrap";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";

const GROUPS: {
  channel: string;
  role: DiscordRole;
  items: InventoryItemName[];
}[] = [
  {
    channel: "#vip-farmers",
    role: "vip-farmers",
    items: [
      "Foreman Beaver",
      "Kuebiko",
      "Nugget",
      "Golden Cauliflower",
      "Gold Egg",
    ],
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Discord: React.FC<Props> = ({ isOpen, onClose }) => {
  const { authService } = useContext(Auth.Context);
  const [authState] = useActor(authService);

  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const [state, setState] = useState<
    "idle" | "noDiscord" | "joining" | "joined" | "error"
  >(authState.context.user.token?.discordId ? "idle" : "noDiscord");

  const inventory = gameState.context.state.inventory;
  const buds = gameState.context.state.buds;
  const oauth = () => {
    redirectOAuth();
  };

  const addRole = async (role: DiscordRole) => {
    if (!authState.context.user.token?.discordId) {
      setState("noDiscord");
      return;
    }

    setState("joining");

    try {
      await addDiscordRole({
        farmId: authState.context.user.farmId as number,
        token: authState.context.user.rawToken as string,
        role: role,
      });
      setState("joined");
    } catch (e) {
      console.error(e);
      setState("error");
    }
  };

  const getContent = (): JSX.Element => {
    if (state === "error") {
      return <span className="text-shadow">Error!</span>;
    }

    if (state === "joining") {
      return <span className="text-shadow loading">Joining</span>;
    }

    if (state === "joined") {
      return (
        <>
          <span className="text-shadow mt-2 block text-center">
            Congratulations!
          </span>
          <span className="text-shadow my-2 block text-center">
            You now have access. Go check out the channel in Discord
          </span>
        </>
      );
    }

    if (state === "noDiscord") {
      return (
        <>
          <span className="text-shadow my-2 block text-sm p-2">
            You must be connected to Discord to join a restricted channel.
          </span>
          <Button onClick={oauth}>Connect</Button>
        </>
      );
    }

    return (
      <span className="text-shadow my-2 block text-sm">
        Get access to restricted groups on Discord
        {GROUPS.map((group) => (
          <div key={group.channel} className="flex justify-between w-full mt-4">
            <div>
              <span className="flex-1">{group.channel}</span>
              <div className="flex items-center flex-wrap">
                <span className="text-xs mr-2">Requires a </span>
                {group.items.map((name) => (
                  <img
                    key={name}
                    src={ITEM_DETAILS[name].image}
                    className="h-6 mr-2"
                  />
                ))}
              </div>
            </div>
            <Button
              className="text-xs h-8 w-20"
              onClick={() => addRole(group.role)}
              disabled={!group.items.some((name) => inventory[name])}
            >
              Join
            </Button>
          </div>
        ))}
        <div key="buds" className="flex justify-between w-full mt-4">
          <div>
            <span className="flex-1">#bud-clubhouse</span>
            <div className="flex items-center flex-wrap">
              <span className="text-xs mr-2">Requires a Bud</span>
              <img src={budIcon} className="h-6 mr-2" />
            </div>
          </div>
          <Button
            className="text-xs h-8 w-20"
            onClick={() => addRole("bud-clubhouse")}
            disabled={Object.keys(buds ?? {}).length === 0}
          >
            Join
          </Button>
        </div>
      </span>
    );
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <CloseButtonPanel title="Discord" onClose={onClose}>
        {getContent()}
      </CloseButtonPanel>
    </Modal>
  );
};
