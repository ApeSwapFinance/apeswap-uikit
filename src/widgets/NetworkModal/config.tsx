import { BinanceIcon } from "../../components/Svg";
import PolygonChain from "./icons/PolygonChain";
import { Config } from "./types";

export enum ChainId {
  BSC = 56,
  BSC_TESTNET = 97,
  MATIC = 137,
  MATIC_TESTNET = 80001,
}

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.BSC]: BinanceIcon,
  [ChainId.MATIC]: PolygonChain,
  [ChainId.BSC_TESTNET]: BinanceIcon,
  [ChainId.MATIC_TESTNET]: PolygonChain,
};

export const NETWORK_LABEL: { [key: number]: any } = {
  [ChainId.BSC]: "BNB",
  [ChainId.BSC_TESTNET]: "BNB Testnet",
  [ChainId.MATIC]: "Polygon",
  [ChainId.MATIC_TESTNET]: "Matic Testnet",
};

const networks: Config[] = [
  {
    chainId: ChainId.BSC,
    networkName: "Build and Build",
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
