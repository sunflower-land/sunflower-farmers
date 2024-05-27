import React, {
  Suspense,
  lazy,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useSelector } from "@xstate/react";
import { Routes, Route, HashRouter } from "react-router-dom";

import * as AuthProvider from "features/auth/lib/Provider";

import { Splash } from "features/auth/components/Splash";
import { Auth } from "features/auth/Auth";
import { Forbidden } from "features/auth/components/Forbidden";
import { LandExpansion } from "features/game/expansion/LandExpansion";
import { CONFIG } from "lib/config";
import { Builder } from "features/builder/Builder";
import { AuthMachineState } from "features/auth/lib/authMachine";
import { ZoomProvider } from "components/ZoomProvider";
import { LoadingFallback } from "./LoadingFallback";
import { Panel } from "components/ui/Panel";
import { useOrientation } from "lib/utils/hooks/useOrientation";
import { useIsPWA } from "lib/utils/hooks/useIsPWA";
import { Modal } from "components/ui/Modal";
import { PWAInstallProvider } from "features/pwa/PWAInstallProvider";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

// Lazy load routes
const World = lazy(() =>
  import("features/world/World").then((m) => ({ default: m.World }))
);
const CommunityTools = lazy(() =>
  import("features/world/ui/CommunityTools").then((m) => ({
    default: m.CommunityTools,
  }))
);

const selectState = (state: AuthMachineState) => ({
  isAuthorised: state.matches("connected"),
  isVisiting: state.matches("visiting"),
});

/**
 * Entry point for game which reflects the user session state
 * Controls flow of authorised and unauthorised games
 */
export const Navigation: React.FC = () => {
  const { t } = useAppTranslation();
  const { authService } = useContext(AuthProvider.Context);
  const state = useSelector(authService, selectState);
  const [showGame, setShowGame] = useState(false);
  const [showOrientationModal, setShowOrientationModal] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const orientation = useOrientation();
  const isPWA = useIsPWA();

  // useEffect(() => {
  //   if (!isMobile) return;

  //   if (orientation === "landscape") {
  //     setShowOrientationModal(true);
  //   } else {
  //     setShowOrientationModal(false);
  //   }
  // }, [orientation, isMobile]);

  useEffect(() => {
    // Check if online on initial load
    if (!navigator.onLine) {
      setShowConnectionModal(true);
    }
    // Set up listeners to watch for connection changes
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  const handleOffline = () => {
    setShowConnectionModal(true);
  };

  const handleOnline = async () => {
    const response = await fetch(".");
    // Verify we get a valid response from the server
    if (response.status >= 200 && response.status < 500) {
      setShowConnectionModal(false);
    }
  };

  useLayoutEffect(() => {
    const _showGame = state.isAuthorised || state.isVisiting;

    // TODO: look into this further
    // This is to prevent a modal clash when the authmachine switches
    // to the game machine.
    setShowGame(_showGame);
  }, [state]);

  return (
    <>
      <Auth showOfflineModal={showConnectionModal} />
      {showGame ? (
        <PWAInstallProvider>
          <ZoomProvider>
            <Modal show={showConnectionModal}>
              <Panel>
                <div className="text-sm p-1 mb-1">{t("welcome.offline")}</div>
              </Panel>
            </Modal>
            <HashRouter>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Forbid entry to Goblin Village when in Visiting State show Forbidden screen */}
                  {!state.isVisiting && (
                    <Route
                      path="/goblins"
                      element={
                        <Splash>
                          <Forbidden />
                        </Splash>
                      }
                    />
                  )}
                  <Route path="/world/:name" element={<World key="world" />} />
                  <Route
                    path="/community/:name"
                    element={<World key="community" isCommunity />}
                  />
                  {CONFIG.NETWORK === "amoy" && (
                    <Route
                      path="/community-tools"
                      element={<CommunityTools key="community-tools" />}
                    />
                  )}

                  <Route
                    path="/visit/*"
                    element={<LandExpansion key="visit" />}
                  />

                  {CONFIG.NETWORK === "amoy" && (
                    <Route
                      path="/builder"
                      element={<Builder key="builder" />}
                    />
                  )}

                  <Route path="*" element={<LandExpansion key="land" />} />
                </Routes>
              </Suspense>
            </HashRouter>
          </ZoomProvider>
        </PWAInstallProvider>
      ) : (
        <Splash />
      )}
    </>
  );
};
