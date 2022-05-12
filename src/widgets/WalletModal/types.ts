import { FC } from "react";
import { LegacySvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  Walletlink = "Walletlink",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<LegacySvgProps>;
  connectorId: ConnectorNames;
}
