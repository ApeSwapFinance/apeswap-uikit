import React from "react";

export type ActionHandler = () => void;

export interface TModalProps {
  t: (key: string) => string;
  onDismiss: ActionHandler;
  type: TutorialModalTypes | string;
  title: string;
  readyText: string;
  description?: string;
  onReady?: ActionHandler;
  children: React.ReactNode | React.ReactNode[];
}

export interface CountProps {
  index: number;
  goToStep: ActionHandler;
  isActive: boolean;
}

export enum TutorialModals {
  BNB_DEX = "BNB-dex",
  POLYGON_DEX = "Polygon-dex",
  ETHEREUM_DEX = "Ethereum-dex",
  TELOS_DEX = "Telos-dex",
  JUNGLE_FARMS = "jungle-farms",
  BANANA_FARMS = "banana-farms",
  POLYGON_FARMS = "Polygon-farms",
  TELOS_FARMS = "Telos-farms",

  POOLS = "pools",

  MAXIMIZERS_VAULTS = "maximizers-vaults",
  LIQUIDITY = "liquidity",
  ORDERS = "orders",
  IAO = "iao",
  GNANA = "gnana",
  LENDING = "lending",
  TREASURY_BILL = "treasury-bills",
}

export type TutorialModalTypes = `${TutorialModals}`;

export interface ShowApeType {
  step: number;
  type: TutorialModalTypes | string;
  isDark: boolean;
}
