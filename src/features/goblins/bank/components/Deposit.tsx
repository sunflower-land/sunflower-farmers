import React, { ChangeEvent, useEffect, useState } from "react";

import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { Inventory, InventoryItemName } from "features/game/types/game";
import Decimal from "decimal.js-light";
import { wallet } from "lib/blockchain/wallet";
import { sflBalanceOf } from "lib/blockchain/Token";
import { getInventoryBalances } from "lib/blockchain/Inventory";
import { balancesToInventory } from "lib/utils/visitUtils";
import { fromWei, toBN, toWei } from "web3-utils";

import token from "assets/icons/token_2.png";
import classNames from "classnames";
import { setPrecision } from "lib/utils/formatNumber";
import { transferInventoryItem } from "./WithdrawItems";
import { getKeys } from "features/game/types/craftables";
import { ITEM_DETAILS } from "features/game/types/images";
import { Box } from "components/ui/Box";
import { KNOWN_IDS } from "features/game/types";
import { Button } from "components/ui/Button";
import { Loading } from "features/auth/components";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const VALID_NUMBER = new RegExp(/^\d*\.?\d*$/);
const INPUT_MAX_CHAR = 10;

export const Deposit: React.FC<Props> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<"loading" | "loaded">("loading");
  const [sflBalance, setSflBalance] = useState<Decimal>(new Decimal(0));
  const [sflDepositAmount, setSflDepositAmount] = useState(0);
  const [inventoryBalance, setInventoryBalance] = useState<Inventory>({});
  const [inventoryToDeposit, setInventoryToDeposit] = useState<Inventory>({});

  useEffect(() => {
    if (!isOpen || status !== "loading") return;

    const loadBalances = async () => {
      const sflBalanceFn = sflBalanceOf(
        wallet.web3Provider,
        wallet.myAccount,
        wallet.myAccount
      );

      const inventoryBalanceFn = getInventoryBalances(
        wallet.web3Provider,
        wallet.myAccount,
        wallet.myAccount
      );

      const [sflBalance, inventoryBalance] = await Promise.all([
        sflBalanceFn,
        inventoryBalanceFn,
      ]);

      setSflBalance(new Decimal(fromWei(sflBalance)));
      setInventoryBalance(balancesToInventory(inventoryBalance));
      setStatus("loaded");
    };

    loadBalances();
  }, [isOpen]);

  const handleSflDepositAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Strip the leading zero from numbers
    if (/^0+(?!\.)/.test(e.target.value) && e.target.value.length > 1) {
      e.target.value = e.target.value.replace(/^0/, "");
    }

    if (VALID_NUMBER.test(e.target.value)) {
      const input = Number(e.target.value.slice(0, INPUT_MAX_CHAR));

      setSflDepositAmount(input);
    }
  };

  const onAddItem = (itemName: InventoryItemName) => {
    // Transfer from inventory to selected
    transferInventoryItem(itemName, setInventoryBalance, setInventoryToDeposit);
  };

  const onRemoveItem = (itemName: InventoryItemName) => {
    // Transfer from selected to inventory
    transferInventoryItem(itemName, setInventoryToDeposit, setInventoryBalance);
  };

  const amountGreaterThanBalance = toBN(toWei(sflDepositAmount.toString())).gt(
    toBN(toWei(sflBalance.toString()))
  );

  const sflBalString = fromWei(toBN(toWei(sflBalance.toString())));
  const formattedSflBalance = setPrecision(
    new Decimal(sflBalString)
  ).toString();

  const depositableItems = getKeys(inventoryBalance)
    .filter((item) => inventoryBalance[item]?.gt(0))
    .sort((a, b) => KNOWN_IDS[a] - KNOWN_IDS[b]);

  const selectedItems = getKeys(inventoryToDeposit)
    .filter((item) => inventoryToDeposit[item]?.gt(0))
    .sort((a, b) => KNOWN_IDS[a] - KNOWN_IDS[b]);

  const hasItemsToDeposit = selectedItems.length > 0;
  const hasItemsInInventory = depositableItems.length > 0;
  const emptyWallet = !hasItemsInInventory && sflBalance.eq(0);

  return (
    <CloseButtonPanel title="Deposit" onClose={onClose}>
      {status === "loading" && <Loading />}
      {status === "loaded" && emptyWallet && (
        <div className="p-2">
          <p>No SFL or Collectibles Found!</p>
        </div>
      )}
      {status === "loaded" && !emptyWallet && (
        <>
          <div className="p-2 mb-2">
            <p className="mb-3">Your Personal Wallet</p>
            <div className="divide-y-2 divide-dashed divide-brown-600">
              <div className="space-y-3 mb-3">
                {sflBalance.gt(0) && (
                  <>
                    <p className="text-sm">SFL</p>
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative w-full mr-4">
                        <input
                          type="number"
                          name="sflDepositAmount"
                          value={sflDepositAmount}
                          disabled={false}
                          onInput={handleSflDepositAmountChange}
                          className={classNames(
                            "text-shadow shadow-inner shadow-black bg-brown-200 w-full p-2",
                            {
                              "text-error": amountGreaterThanBalance,
                            }
                          )}
                        />
                        <span className="text-xxs absolute top-1/2 -translate-y-1/2 right-2">{`Balance: ${formattedSflBalance}`}</span>
                      </div>
                      <div className="w-[10%] flex self-center justify-center">
                        <img className="w-6" src={token} alt="sfl token" />
                      </div>
                    </div>
                  </>
                )}
                {hasItemsInInventory && (
                  <>
                    <p className="text-sm">Collectibles</p>
                    <div className="flex flex-wrap h-fit -ml-1.5">
                      {depositableItems.map((item) => {
                        return (
                          <Box
                            count={inventoryBalance[item]}
                            key={item}
                            onClick={() => onAddItem(item)}
                            image={ITEM_DETAILS[item].image}
                            canBeLongPressed
                          />
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              <div className="pt-3">
                <p className="mb-3">Your farm will receive:</p>
                <div className="space-y-3">
                  {sflDepositAmount > 0 && <p>{sflDepositAmount} SFL</p>}
                  {hasItemsToDeposit && (
                    <div className="flex flex-wrap h-fit -ml-1.5">
                      {selectedItems.map((item) => {
                        return (
                          <Box
                            count={inventoryToDeposit[item]}
                            key={item}
                            onClick={() => onRemoveItem(item)}
                            image={ITEM_DETAILS[item].image}
                            canBeLongPressed
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Button className="w-full" disabled={amountGreaterThanBalance}>
            Send to farm
          </Button>
        </>
      )}
    </CloseButtonPanel>
  );
};
