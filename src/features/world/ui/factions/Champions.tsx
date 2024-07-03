import React, { useContext, useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import classNames from "classnames";

import { Label } from "components/ui/Label";
import { Panel } from "components/ui/Panel";
import { Loading } from "features/auth/components";
import { Context } from "features/game/GameProvider";
import {
  KingdomLeaderboard,
  getLeaderboard,
} from "features/game/expansion/components/leaderboard/actions/leaderboard";
import {
  FACTION_PRIZES,
  getPreviousWeek,
  getWeekNumber,
} from "features/game/lib/factions";
import { getKeys } from "features/game/types/decorations";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

import gift from "assets/icons/gift.png";
import trophy from "assets/icons/trophy.png";
import coins from "assets/icons/coins.webp";
import sfl from "assets/icons/sfl.webp";

import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { FactionName, InventoryItemName } from "features/game/types/game";
import { Fireworks } from "./components/ClaimEmblems";
import { ITEM_DETAILS } from "features/game/types/images";

interface Props {
  onClose: () => void;
}

export const Champions: React.FC<Props> = ({ onClose }) => {
  const [tab, setTab] = useState(0);

  const { t } = useAppTranslation();

  return (
    <CloseButtonPanel
      onClose={onClose}
      tabs={[
        {
          name: "Champions",
          icon: trophy,
        },
        {
          name: "Prizes",
          icon: gift,
        },
      ]}
      currentTab={tab}
      setCurrentTab={setTab}
    >
      {tab === 0 && <ChampionsLeaderboard onClose={onClose} />}
      {tab === 1 && <ChampionsPrizes onClose={onClose} />}
    </CloseButtonPanel>
  );
};

export const ChampionsLeaderboard: React.FC<Props> = ({ onClose }) => {
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<KingdomLeaderboard>();

  const { t } = useAppTranslation();

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const data = await getLeaderboard<KingdomLeaderboard>({
        farmId: Number(gameState.context.farmId),
        leaderboardName: "kingdom",
        date: getPreviousWeek(),
      });

      setLeaderboard(data);
      setIsLoading(false);
    };

    load();
  }, []);

  if (isLoading || !leaderboard) {
    return <Loading />;
  }

  if (leaderboard.status === "pending") {
    return <Label type="formula">{t("leaderboard.resultsPending")}</Label>;
  }

  const totals = leaderboard.marks.totalTickets;

  // Get faction with highest
  const winningFaction = getKeys(totals).reduce((winner, name) => {
    return totals[winner] > totals[name] ? winner : name;
  }, "bumpkins");

  const topRanks = leaderboard.marks.topTens[winningFaction];

  const playerId = gameState.context.state.username ?? gameState.context.farmId;

  return (
    <>
      <Fireworks />

      <div className="flex justify-between items-center mb-1">
        <Label type="default">Champions</Label>
        <Label type="formula">{`Week #${getWeekNumber()}`}</Label>
      </div>
      <p className="text-sm mb-2 pl-1">{`Congratulations to the ${winningFaction}!`}</p>
      <Label type="default" className="mb-2">
        Leaderboard
      </Label>
      <table className="w-full text-xs table-auto border-collapse">
        <thead>
          <tr>
            <th style={{ border: "1px solid #b96f50" }} className="p-1.5">
              <p>{`Position`}</p>
            </th>
            <th style={{ border: "1px solid #b96f50" }} className="p-1.5">
              <p>{t("player")}</p>
            </th>
            <th style={{ border: "1px solid #b96f50" }} className="w-2/5 p-1.5">
              <p>{`Score`}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {topRanks.slice(0, 7).map(({ id, rank, count }, index) => (
            <tr
              key={index}
              className={classNames({
                "bg-[#ead4aa]": id === playerId,
              })}
            >
              <td style={{ border: "1px solid #b96f50" }} className="p-1.5">
                {rank ?? index + 1}
              </td>
              <td style={{ border: "1px solid #b96f50" }} className="truncate">
                <div className="flex items-center space-x-1">
                  <span className="p-1.5">{id}</span>
                </div>
              </td>

              <td style={{ border: "1px solid #b96f50" }} className="p-1.5">
                <div className="flex items-center space-x-1 justify-end">
                  <>
                    <span>{count}</span>
                  </>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const TROPHIES: Record<FactionName, Record<number, InventoryItemName>> = {
  goblins: {
    1: "Goblin Gold Champion",
    2: "Goblin Silver Champion",
    3: "Goblin Bronze Champion",
  },
  bumpkins: {
    1: "Bumpkin Gold Champion",
    2: "Bumpkin Silver Champion",
    3: "Bumpkin Bronze Champion",
  },
  nightshades: {
    1: "Nightshade Gold Champion",
    2: "Nightshade Silver Champion",
    3: "Nightshade Bronze Champion",
  },
  sunflorians: {
    1: "Sunflorian Gold Champion",
    2: "Sunflorian Silver Champion",
    3: "Sunflorian Bronze Champion",
  },
};

export const ChampionsPrizes: React.FC<Props> = ({ onClose }) => {
  return (
    <div
      className="p-1 overflow-y-scroll scrollable pr-1"
      style={{ maxHeight: "350px" }}
    >
      <p className="text-sm mb-2">Each week you can win bonus prizes.</p>
      <Label type="default" className="mb-2">
        Champion Faction
      </Label>
      <p className="text-xs mb-2">
        The players in the winning faction will receive:
      </p>
      <table className="w-full text-xs table-auto border-collapse mb-2">
        <tbody>
          <tr>
            <td style={{ border: "1px solid #b96f50" }} className="p-1.5">
              All
            </td>
            <td style={{ border: "1px solid #b96f50" }} className="truncate">
              <div className="flex items-center space-x-1">
                <span className="p-1.5">Bonus +10% Marks</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Label type="default" className="mb-2">
        Top Player Prizes
      </Label>
      <p className="text-xs mb-2">
        The top 50 players in each faction will receive:
      </p>
      <table className="w-full text-xs table-auto border-collapse">
        <tbody>
          {getKeys(FACTION_PRIZES).map((position, index) => {
            const prize = FACTION_PRIZES[position];
            const trophy = TROPHIES["goblins"][index + 1];

            return (
              <tr key={index}>
                <td style={{ border: "1px solid #b96f50" }} className="p-1.5">
                  {position}
                </td>
                <td
                  style={{ border: "1px solid #b96f50" }}
                  className="truncate"
                >
                  <div className="flex items-center space-x-2 pl-1 flex-wrap">
                    {!!prize.coins && (
                      <div className="flex items-center">
                        <span className="text-xs">{`${prize.coins} `}</span>
                        <img src={coins} className="h-4 ml-0.5" />
                      </div>
                    )}
                    {!!prize.sfl && (
                      <div className="flex items-center">
                        <span className="text-xs">{`${prize.sfl} `}</span>
                        <img src={sfl} className="h-4 ml-0.5" />
                      </div>
                    )}
                    {getKeys(prize.items).map((item, index) => {
                      const count = prize.items[item];
                      return (
                        <div key={index} className="flex items-center">
                          <span className="text-xs">{`${count} `}</span>
                          <img
                            src={ITEM_DETAILS[item].image}
                            className="h-4 ml-0.5"
                          />
                        </div>
                      );
                    })}
                    {!!trophy && (
                      <div className="flex items-center">
                        <span className="text-xs">{`Trophy `}</span>
                        <img
                          src={ITEM_DETAILS[trophy].image}
                          className="h-4 ml-0.5"
                        />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
