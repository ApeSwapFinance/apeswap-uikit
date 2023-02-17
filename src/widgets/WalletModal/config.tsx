import Metamask from "./icons/Metamask";
import Brave from "./icons/Brave";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import OntoWallet from "./icons/OntoWallet";
import Nabox from "./icons/Nabox";
import SafePalWallet from "./icons/SafePalWallet";
import TorusWallet from "./icons/TorusWallet";
import Coinbase from "./icons/Coinbase";
import Unstoppable from "./icons/Unstoppable";
import Bitkeep from "./icons/Bitkeep";
import { Config, ConnectorNames } from "./types";
import OKX from "./icons/OKX";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Wallet Connect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Bitkeep",
    icon: Bitkeep,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
  {
    title: "Brave Wallet",
    icon: Brave,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Social Login",
    icon: TorusWallet,
    connectorId: ConnectorNames.Torus,
  },
  {
    title: "Coinbase Wallet",
    icon: Coinbase,
    connectorId: ConnectorNames.Walletlink,
  },
  {
    title: "Unstoppable Domains",
    icon: Unstoppable,
    connectorId: ConnectorNames.Unstoppable,
  },
  {
    title: "NABOX Wallet",
    icon: Nabox,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "ONTO Wallet",
    icon: OntoWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "OKX Wallet",
    icon: OKX,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
