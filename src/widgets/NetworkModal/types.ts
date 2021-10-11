import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export type SwitchNetwork = (chainId: number) => void;

export interface Config {
  chainId: number;
  networkName: string;
  symbol: string;
  icon: FC<SvgProps>;
}
