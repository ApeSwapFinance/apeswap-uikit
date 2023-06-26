import { ETH as ETHIcon, TLOS as TLOSIcon } from "../../components/Svg/tokens";
import BinanceChain from "./icons/BinanceChain";
import PolygonChain from "./icons/PolygonChain";
import { Config } from "./types";
import ARBITRUMIcon from "../../components/Svg/Chains/ARBITRUM";

export enum ChainId {
  BSC = 56,
  BSC_TESTNET = 97,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  ETH = 1,
  TLOS = 40,
  ARBITRUM = 42161,
}

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.BSC]: BinanceChain,
  [ChainId.MATIC]: PolygonChain,
  [ChainId.BSC_TESTNET]: BinanceChain,
  [ChainId.MATIC_TESTNET]: PolygonChain,
  [ChainId.ETH]: ETHIcon,
  [ChainId.TLOS]: TLOSIcon,
  [ChainId.ARBITRUM]: ARBITRUMIcon,
};

export const NETWORK_LABEL: { [key: number]: any } = {
  [ChainId.BSC]: "BNB",
  [ChainId.BSC_TESTNET]: "BNB Testnet",
  [ChainId.MATIC]: "Polygon",
  [ChainId.MATIC_TESTNET]: "Matic Testnet",
  [ChainId.ETH]: "Ethereum",
  [ChainId.TLOS]: "Telos",
  [ChainId.ARBITRUM]: "Arbitrum",
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
  // {
  //   chainId: ChainId.TLOS,
  //   networkName: "Telos",
  //   symbol: NETWORK_LABEL[ChainId.TLOS],
  //   icon: NETWORK_ICON[ChainId.TLOS],
  // },
  {
    chainId: ChainId.ETH,
    networkName: "Ethereum",
    symbol: NETWORK_LABEL[ChainId.ETH],
    icon: NETWORK_ICON[ChainId.ETH],
  },
  {
    chainId: ChainId.ARBITRUM,
    networkName: "Arbitrum",
    symbol: NETWORK_LABEL[ChainId.ARBITRUM],
    icon: NETWORK_ICON[ChainId.ARBITRUM],
  },
];

export default networks;
