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
import TorusWallet from "./icons/SocialLogin";
import Coinbase from "./icons/Coinbase";
import Unstoppable from "./icons/Unstoppable";
import Bitkeep from "./icons/Bitkeep";
import { Config, ConnectorNames } from "./types";

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
    title: "Social Login",
    icon: TorusWallet,
    connectorId: ConnectorNames.Torus,
  },
  {
    title: "Brave Wallet",
    icon: Brave,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coinbase Wallet",
    icon: Coinbase,
    connectorId: ConnectorNames.Walletlink,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
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
    title: "Bitkeep",
    icon: Bitkeep,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
