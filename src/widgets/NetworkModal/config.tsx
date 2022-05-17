import { ETH as ETHIcon } from "../../components/Svg/tokens";
import BinanceChain from "./icons/BinanceChain";
import PolygonChain from "./icons/PolygonChain";
import { Config } from "./types";

export enum ChainId {
  BSC = 56,
  BSC_TESTNET = 97,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  ETH = 1,
}

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.BSC]: BinanceChain,
  [ChainId.MATIC]: PolygonChain,
  [ChainId.BSC_TESTNET]: BinanceChain,
  [ChainId.MATIC_TESTNET]: PolygonChain,
  [ChainId.ETH]: ETHIcon,
};

export const NETWORK_LABEL: { [key: number]: any } = {
  [ChainId.BSC]: "BNB",
  [ChainId.BSC_TESTNET]: "BNB Testnet",
  [ChainId.MATIC]: "Polygon",
  [ChainId.MATIC_TESTNET]: "Matic Testnet",
  [ChainId.ETH]: "Ethereum",
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
  {
    chainId: ChainId.ETH,
    networkName: "Ethereum",
    symbol: NETWORK_LABEL[ChainId.ETH],
    icon: NETWORK_ICON[ChainId.ETH],
  },
];

export default networks;
