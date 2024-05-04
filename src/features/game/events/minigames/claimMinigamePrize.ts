import { GameState } from "features/game/types/game";
import {
  MinigameName,
  SUPPORTED_MINIGAMES,
} from "features/game/types/minigames";
import cloneDeep from "lodash.clonedeep";

export type ClaimMinigamePrizeAction = {
  type: "minigame.prizeClaimed";
  id: MinigameName;
};

type Options = {
  state: Readonly<GameState>;
  action: ClaimMinigamePrizeAction;
  createdAt?: number;
};

export function claimMinigamePrize({
  state,
  action,
  createdAt = Date.now(),
}: Options): GameState {
  const game = cloneDeep<GameState>(state);

  if (!SUPPORTED_MINIGAMES.includes(action.id)) {
    throw new Error(`${action.id} is not a valid minigame`);
  }

  const minigames = (game.minigames ?? {}) as Required<GameState>["minigames"];
  const { games, prizes } = minigames;

  const todayKey = new Date(createdAt).toISOString().slice(0, 10);

  // Get todays prize
  const prize = prizes[action.id];

  if (!prize) {
    throw new Error(`No prize found for ${action.id}`);
  }

  if (createdAt < prize.startAt || createdAt > prize.endAt) {
    throw new Error("Prize is no longer available");
  }

  const minigame = games[action.id];
  const history = minigame?.history[todayKey];

  // has not played
  if (!history) {
    throw new Error(`No history found for ${action.id}`);
  }

  // Has reached score
  if (history.highscore < prize.score) {
    throw new Error(`Score ${history.highscore} is less than ${prize.score}`);
  }

  // Has already claimed
  const claimedAt = games[action.id]?.prizeClaimedAt ?? 0;
  const claimedDay = new Date(claimedAt).toISOString().substring(0, 10);

  if (claimedDay === new Date(createdAt).toISOString().substring(0, 10)) {
    throw new Error(`Already claimed ${action.id} prize`);
  }

  // Claim prize
  minigame.prizeClaimedAt = createdAt;

  // Claim coins
  if (!!prize.coins) {
    game.coins += prize.coins;
  }

  // Claim points
  if (!!prize.factionPoints && game.faction) {
    game.faction.points += prize.factionPoints;
  }

  return game;
}
