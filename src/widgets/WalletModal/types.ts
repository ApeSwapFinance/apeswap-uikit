import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  Walletlink = "Walletlink",
  Unstoppable = "Unstoppable",
  Torus = "Torus",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
}
