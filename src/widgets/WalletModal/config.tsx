import Metamask from "../../components/Svg/WalletsIcons/Metamask";
import Brave from "../../components/Svg/WalletsIcons/Brave";
import MathWallet from "../../components/Svg/WalletsIcons/MathWallet";
import TokenPocket from "../../components/Svg/WalletsIcons/TokenPocket";
import TrustWallet from "../../components/Svg/WalletsIcons/TrustWallet";
import WalletConnect from "../../components/Svg/WalletsIcons/WalletConnect";
import OntoWallet from "../../components/Svg/WalletsIcons/OntoWallet";
import Nabox from "../../components/Svg/WalletsIcons/Nabox";
import SafePalWallet from "../../components/Svg/WalletsIcons/SafePalWallet";
import Coinbase from "../../components/Svg/WalletsIcons/Coinbase";
import Bitkeep from "../../components/Svg/WalletsIcons/Bitkeep";
import OKX from "../../components/Svg/WalletsIcons/OKX";
import MadWallet from "../../components/Svg/WalletsIcons/MadWallet";
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
    title: "Brave Wallet",
    icon: Brave,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coinbase Wallet",
    icon: Coinbase,
    connectorId: ConnectorNames.Walletlink,
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
  {
    title: "MadWallet",
    icon: MadWallet,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
