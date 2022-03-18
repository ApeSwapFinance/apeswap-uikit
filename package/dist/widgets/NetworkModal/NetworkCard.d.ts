import React from "react";
import { SwitchNetwork, Config } from "./types";
interface Props {
    networkConfig: Config;
    chainId: number;
    onDismiss: () => void;
    switchNetwork: SwitchNetwork;
}
declare const NetworkCard: React.FC<Props>;
export default NetworkCard;
