import { InnerPanel } from "components/ui/Panel";
import { ITEM_DETAILS } from "features/game/types/images";
import React, { useContext, useEffect, useState } from "react";
import budIcon from "assets/icons/bud.png";
import wearableIcon from "assets/icons/wearables.webp";
import lightning from "assets/icons/lightning.png";
import filterIcon from "assets/icons/filter_icon.webp";
import tradeIcon from "assets/icons/trade.png";
import trade_point from "src/assets/icons/trade_points_coupon.webp";
import sflIcon from "assets/icons/sfl.webp";
import crownIcon from "assets/icons/vip.webp";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";
import { Collection, preloadCollections } from "./Collection";
import { SUNNYSIDE } from "assets/sunnyside";
import { TextInput } from "components/ui/TextInput";
import { SquareIcon } from "components/ui/SquareIcon";
import { Modal } from "components/ui/Modal";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { MarketplaceProfile } from "./MarketplaceProfile";
import { MyTrades } from "./profile/MyTrades";
import { MarketplaceRewards } from "./MarketplaceRewards";
import { Tradeable } from "./Tradeable";
import classNames from "classnames";
import { MarketplaceHotNow } from "./MarketplaceHotNow";
import { CONFIG } from "lib/config";
import { MarketplaceUser } from "./MarketplaceUser";
import { Context } from "features/game/GameProvider";
import * as Auth from "features/auth/lib/Provider";
import { useActor, useSelector } from "@xstate/react";
import { useTranslation } from "react-i18next";
import { Label } from "components/ui/Label";
import { Button } from "components/ui/Button";
import { MachineState } from "features/game/lib/gameMachine";
import { hasVipAccess } from "features/game/lib/vipAccess";
import { ModalContext } from "features/game/components/modal/ModalProvider";

const _isVIP = (state: MachineState) =>
  hasVipAccess(state.context.state.inventory);

export const MarketplaceNavigation: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showQuickswap, setShowQuickswap] = useState(false);

  const { openModal } = useContext(ModalContext);

  const { authService } = useContext(Auth.Context);
  const [authState] = useActor(authService);

  useEffect(() => {
    const token = authState.context.user.rawToken as string;
    if (CONFIG.API_URL) preloadCollections(token);
  }, []);
  const { t } = useTranslation();

  const { gameService } = useContext(Context);
  const price = gameService.getSnapshot().context.prices.sfl?.usd ?? 0.0;

  const isVIP = useSelector(gameService, _isVIP);

  return (
    <>
      <Modal show={showFilters} onHide={() => setShowFilters(false)}>
        <CloseButtonPanel>
          <Filters onClose={() => setShowFilters(false)} />
          <EstimatedPrice
            price={price}
            onClick={() => setShowQuickswap(true)}
          />
        </CloseButtonPanel>
      </Modal>

      <Modal show={showQuickswap} onHide={() => setShowQuickswap(false)}>
        <CloseButtonPanel onClose={() => setShowQuickswap(false)}>
          <div className="p-1">
            <Label type="danger" className="mb-2">
              {t("marketplace.quickswap")}
            </Label>
            <p className="text-sm mb-2">
              {t("marketplace.quickswap.description")}
            </p>
            <p className="text-sm mb-2">{t("marketplace.quickswap.warning")}</p>
            <Button
              onClick={() => {
                window.open(
                  "https://quickswap.exchange/#/swap?swapIndex=0&currency0=ETH&currency1=0xD1f9c58e33933a993A3891F8acFe05a68E1afC05",
                  "_blank",
                );
              }}
            >
              {t("continue")}
            </Button>
          </div>
        </CloseButtonPanel>
      </Modal>

      <div className="flex items-center lg:hidden h-[50px]">
        <TextInput
          icon={SUNNYSIDE.icons.search}
          value={search}
          onValueChange={setSearch}
        />
        <img
          src={filterIcon}
          onClick={() => setShowFilters(true)}
          className="h-8 mx-1 block cursor-pointer"
        />
      </div>

      <div className="flex h-[calc(100%-50px)] lg:h-full">
        <div className="w-64  mr-1 hidden lg:flex  flex-col">
          <InnerPanel className="w-full flex-col mb-1">
            <div className="flex  items-center">
              <TextInput
                icon={SUNNYSIDE.icons.search}
                value={search}
                onValueChange={setSearch}
                onCancel={() => setSearch("")}
              />
            </div>
            <div className="flex-1">
              <Filters onClose={() => setShowFilters(false)} />
            </div>
          </InnerPanel>

          <EstimatedPrice
            price={price}
            onClick={() => setShowQuickswap(true)}
          />

          {!isVIP && (
            <InnerPanel
              className="p-2 cursor-pointer"
              onClick={() => {
                openModal("VIP_ITEMS");
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <Label icon={crownIcon} type="danger" className="ml-1">
                  {t("vipAccess")}
                </Label>
                <p className="text-xxs underline">{t("readMore")}</p>
              </div>
              <p className="text-xxs">{t("marketplace.wantToUnlock")}</p>
            </InnerPanel>
          )}
        </div>

        <div className="flex-1 flex flex-col w-full">
          {search ? (
            <Collection search={search} onNavigated={() => setSearch("")} />
          ) : (
            <Routes>
              <Route path="/profile" element={<MarketplaceProfile />} />
              <Route path="/hot" element={<MarketplaceHotNow />} />
              <Route path="/collection/*" element={<Collection />} />
              <Route path="/:collection/:id" element={<Tradeable />} />
              <Route path="/profile/:id" element={<MarketplaceUser />} />
              <Route path="/profile/:id/trades" element={<MyTrades />} />
              <Route path="/profile/rewards" element={<MarketplaceRewards />} />
              {/* default to hot */}
              <Route path="/" element={<MarketplaceHotNow />} />
            </Routes>
          )}
        </div>
      </div>
    </>
  );
};

export type MarketplacePurpose = "boost" | "decoration" | "resource";

interface OptionProps {
  icon: string;
  label: string;
  onClick: () => void;
  isActive?: boolean;
  options?: OptionProps[];
}

const Option: React.FC<OptionProps> = ({
  icon,
  label,
  onClick,
  options,
  isActive,
}) => {
  return (
    <div className="mb-1">
      <div
        className={classNames(
          "flex justify-between items-center cursor-pointer mb-1 ",
          { "bg-brown-100 px-2 -mx-2": isActive },
        )}
        onClick={onClick}
      >
        <div className="flex items-center">
          <SquareIcon icon={icon} width={10} />
          <span className="text-sm ml-2">{label}</span>
        </div>
        <img src={SUNNYSIDE.icons.chevron_right} className="w-4" />
      </div>

      {options?.map((option) => (
        <div
          key={option.label}
          className={classNames(
            "flex justify-between items-center cursor-pointer mb-1 ml-4",
            { "bg-brown-100 px-2 -mr-2 ml-0": option.isActive },
          )}
          onClick={option.onClick}
        >
          <div className="flex items-center">
            <SquareIcon icon={option.icon} width={10} />
            <span className="text-sm ml-2">{option.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Filters: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [queryParams] = useSearchParams();
  const filters = queryParams.get("filters");

  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);

  const isWorldRoute = pathname.includes("/world");

  return (
    <div className="p-1 h-full">
      <div className="flex flex-col h-full">
        <div>
          <Option
            icon={SUNNYSIDE.icons.expression_alerted}
            label="Hot now"
            onClick={() => {
              navigate(`${isWorldRoute ? "/world" : ""}/marketplace/hot`);
              onClose();
            }}
            isActive={
              pathname === `${isWorldRoute ? "/world" : ""}/marketplace/hot`
            }
          />
          <Option
            icon={lightning}
            label="Power ups"
            onClick={() =>
              navigate(
                `${isWorldRoute ? "/world" : ""}/marketplace/collection?filters=collectibles,wearables,utility`,
              )
            }
            isActive={filters === "collectibles,wearables,utility"}
            options={
              filters?.includes("utility")
                ? [
                    {
                      icon: ITEM_DETAILS["Freya Fox"].image,
                      label: "Collectibles",
                      isActive: filters === "utility,collectibles",
                      onClick: () => {
                        navigate(
                          `${isWorldRoute ? "/world" : ""}/marketplace/collection?filters=utility,collectibles`,
                        );
                        onClose();
                      },
                    },
                    {
                      icon: wearableIcon,
                      label: "Wearables",
                      isActive: filters === "utility,wearables",
                      onClick: () => {
                        navigate(
                          `${isWorldRoute ? "/world" : ""}/marketplace/collection?filters=utility,wearables`,
                        );
                        onClose();
                      },
                    },
                  ]
                : undefined
            }
          />

          <Option
            icon={ITEM_DETAILS.Eggplant.image}
            label="Resources"
            onClick={() => {
              navigate(
                `${isWorldRoute ? "/world" : ""}/marketplace/collection?filters=resources`,
              );
              onClose();
            }}
            isActive={filters === "resources"}
          />

          <Option
            icon={SUNNYSIDE.icons.stopwatch}
            label="Limited"
            onClick={() => {
              navigate(
                `${isWorldRoute ? "/world" : ""}/marketplace/collection?filters=temporary`,
              );
              onClose();
            }}
            isActive={filters === "temporary"}
          />

          <Option
            icon={SUNNYSIDE.icons.heart}
            label="Cosmetics"
            onClick={() => {
              navigate(
                `${isWorldRoute ? "/world" : ""}/marketplace/collection?filters=collectibles,wearables,cosmetic`,
              );
              onClose();
            }}
            isActive={filters === "collectibles,wearables,cosmetic"}
          />

          <Option
            icon={budIcon}
            label="Bud NFTs"
            onClick={() => {
              navigate(
                `${isWorldRoute ? "/world" : ""}/marketplace/collection?filters=buds`,
              );
              onClose();
            }}
            isActive={filters === "buds"}
          />
        </div>

        <div>
          <Option
            icon={SUNNYSIDE.icons.player}
            label="My Profile"
            onClick={() => {
              navigate(
                `${isWorldRoute ? "/world" : ""}/marketplace/profile/${gameState.context.farmId}`,
              );
              onClose();
            }}
            options={
              pathname.includes("profile")
                ? [
                    {
                      icon: SUNNYSIDE.icons.lightning,
                      label: "Stats",
                      onClick: () => {
                        navigate(
                          `${isWorldRoute ? "/world" : ""}/marketplace/profile/${gameState.context.farmId}`,
                        );
                        onClose();
                      },
                      isActive:
                        pathname ===
                        `${isWorldRoute ? "/world" : ""}/marketplace/profile/${gameState.context.farmId}`,
                    },
                    {
                      icon: tradeIcon,
                      label: "Trades",
                      onClick: () => {
                        navigate(
                          `${isWorldRoute ? "/world" : ""}/marketplace/profile/${gameState.context.farmId}/trades`,
                        );
                        onClose();
                      },
                      isActive:
                        pathname ===
                        `${isWorldRoute ? "/world" : ""}/marketplace/profile/${gameState.context.farmId}/trades`,
                    },
                    {
                      icon: trade_point,
                      label: "Rewards",
                      onClick: () => {
                        navigate(
                          `${isWorldRoute ? "/world" : ""}/marketplace/profile/rewards`,
                        );
                        onClose();
                      },
                      isActive:
                        pathname ===
                        `${isWorldRoute ? "/world" : ""}/marketplace/profile/rewards`,
                    },
                  ]
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};

const EstimatedPrice: React.FC<{ price: number; onClick: () => void }> = ({
  price,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <InnerPanel className="cursor-pointer mb-1" onClick={onClick}>
      <div className="flex justify-between items-center pr-1">
        <div className="flex items-center">
          <img src={sflIcon} className="w-6" />
          <span className="text-sm ml-2">{`$${price.toFixed(4)}`}</span>
        </div>
        <p className="text-xxs underline">{t("marketplace.quickswap")}</p>
      </div>
      <p className="text-xxs italic">{t("marketplace.estimated.price")}</p>
    </InnerPanel>
  );
};
