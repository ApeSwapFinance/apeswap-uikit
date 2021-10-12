import BinanceChain from "./icons/BinanceChain";
import PolygonChain from "./icons/PolygonChain";
import { Config } from "./types";

export enum ChainId {
  BSC = 56,
  BSC_TESTNET = 97,
  MATIC = 137,
  MATIC_TESTNET = 80001,
}

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.BSC]: BinanceChain,
  [ChainId.MATIC]: PolygonChain,
  [ChainId.BSC_TESTNET]: BinanceChain,
  [ChainId.MATIC_TESTNET]: PolygonChain,
};

export const NETWORK_LABEL: { [key: number]: any } = {
  [ChainId.BSC]: "BSC",
  [ChainId.BSC_TESTNET]: "BSC Testnet",
  [ChainId.MATIC]: "Polygon",
  [ChainId.MATIC_TESTNET]: "Matic Testnet",
};

const networks: Config[] = [
  {
    chainId: ChainId.BSC,
    networkName: "Binance Smart Chain",
    symbol: NETWORK_LABEL[ChainId.BSC],
    icon: NETWORK_ICON[ChainId.BSC],
  },
  {
    chainId: ChainId.MATIC,
    networkName: "Polygon (Matic)",
    symbol: NETWORK_LABEL[ChainId.MATIC],
    icon: NETWORK_ICON[ChainId.MATIC],
  },
];

export default networks;
