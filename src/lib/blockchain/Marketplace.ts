import { CONFIG } from "lib/config";
import MarketplaceABI from "./abis/Marketplace";
import { getNextSessionId } from "./Session";
import {
  waitForTransactionReceipt,
  writeContract,
  readContract,
} from "@wagmi/core";
import { config } from "features/wallet/WalletProvider";
import { saveTxHash } from "features/game/types/transactions";

const address = CONFIG.MARKETPLACE_CONTRACT;

export type AcceptOfferParams = {
  signature: string;
  sessionId: string;
  nextSessionId: string;
  deadline: number;
  sender: string;
  farmId: number;
  playerAmount: number | string;
  teamAmount: number | string;
  offer: {
    tradeId: string;
    signature: string;
    farmId: number;
    id: number;
    sfl: number;
    collection: "collectibles" | "buds" | "wearables" | "resources";
    name: string;
  };
};

export async function acceptOfferTransaction({
  sender,
  signature,
  sessionId,
  nextSessionId,
  deadline,
  farmId,
  offer,
  playerAmount,
  teamAmount,
}: AcceptOfferParams): Promise<string> {
  const oldSessionId = sessionId;

  const hash = await writeContract(config, {
    abi: MarketplaceABI,
    address: address as `0x${string}`,
    functionName: "acceptOffer",
    args: [
      signature as `0x${string}`,
      sessionId as `0x${string}`,
      nextSessionId as `0x${string}`,
      BigInt(deadline),
      BigInt(farmId),
      BigInt(playerAmount),
      BigInt(teamAmount),
      BigInt(0),
      {
        signature: offer.signature as `0x${string}`,
        tradeId: offer.tradeId,
        farmId: BigInt(offer.farmId),
        id: BigInt(offer.id),
        sfl: BigInt(offer.sfl),
        collection: offer.collection,
        name: offer.name,
      },
    ],
    account: sender as `0x${string}`,
  });

  saveTxHash({ event: "transaction.offerAccepted", hash, sessionId, deadline });
  await waitForTransactionReceipt(config, { hash });

  return await getNextSessionId(sender, farmId, oldSessionId);
}

export type ListingPurchasedParams = {
  sessionId: string;
  nextSessionId: string;
  deadline: number;
  sender: string;
  farmId: number;
  playerAmount: number | string;
  teamAmount: number | string;
  signature: string;
  listing: {
    signature: string;
    id: string;
    farmId: number;
    itemId: number;
    sfl: number;
    quantity: number;
    collection: string;
    itemName: string;
  };
};

export async function listingPurchasedTransaction({
  sender,
  signature,
  sessionId,
  nextSessionId,
  deadline,
  farmId,
  listing,
  playerAmount,
  teamAmount,
}: ListingPurchasedParams): Promise<string> {
  const oldSessionId = sessionId;

  console.log(
    "Hi",
    address,
    await readContract(config, {
      abi: MarketplaceABI,
      address: address as `0x${string}`,
      functionName: "eip712Domain",
    }),
  );

  console.log(
    "OKAY!",
    await readContract(config, {
      abi: MarketplaceABI,
      address: "0x6B4c0eE875eD7F7597687a8EF35b56243FA63a47",
      functionName: "eip712Domain",
    }),
  );

  const hash = await writeContract(config, {
    abi: MarketplaceABI,
    address: address as `0x${string}`,
    functionName: "purchaseListing",
    args: [
      {
        listing: listing as any,
        sessionId: sessionId as `0x${string}`,
        nextSessionId: nextSessionId as `0x${string}`,
        buyerFarmId: BigInt(farmId),
        deadline: BigInt(deadline),
        playerAmount: BigInt(playerAmount),
        teamAmount: BigInt(teamAmount),
        signature: signature as `0x${string}`,
        amountOutMinimum: BigInt(0),
      },
    ],
    account: sender as `0x${string}`,
  });

  saveTxHash({
    event: "transaction.listingPurchased",
    hash,
    sessionId,
    deadline,
  });
  await waitForTransactionReceipt(config, { hash });

  return await getNextSessionId(sender, farmId, oldSessionId);
}
