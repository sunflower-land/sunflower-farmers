import { GameAnalytics } from "gameanalytics";
import { CONFIG } from "./config";

class GameAnalyticTracker {
  public async initialise() {
    GameAnalytics.setEnabledInfoLog(true);
    GameAnalytics.setEnabledVerboseLog(true);

    GameAnalytics.configureBuild(CONFIG.RELEASE_VERSION);
    GameAnalytics.initialize(
      "25605bc25eb544f8f7cc45ba00398a49",
      "7d9c33d1f9a5aa6d2568742d4219fdf8495ee8c7"
    );

    // GameAnalytics.startSession();
  }
}

export const gameAnalytics = new GameAnalyticTracker();
