export type ActionHandler = () => void;

export interface TModalProps {
  t: (key: string) => string;
  onDismiss: ActionHandler;
  type: TutorialModalTypes;
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

export enum tutorialModals {
  JUNGLE_FARMS = "jungle-farms",
  BANANA_FARMS = "banana-farms",
  POLYGON_FARMS = "polygon-farms",
  TELOS_FARMS = "telos-farms",
  BSC_DEX = "bsc-dex",
  POLYGON_DEX = "polygon-dex",
  ETHEREUM_DEX = "ethereum-dex",
  TELOS_DEX = "telos-dex",
  MAXIMIZERS_VAULTS = "maximizers-vaults",
  LIQUIDITY = "liquidity",
  ORDERS = "orders",
  IAO = "iao",
  GNANA = "gnana",
  POOLS = "pools",
  LENDING = "lending",
  TREASURY_BILL = "treasury-bills",
}

export type TutorialModalTypes = `${tutorialModals}`;

export interface ShowApeType {
  type: TutorialModalTypes;
  isDark: boolean;
}
