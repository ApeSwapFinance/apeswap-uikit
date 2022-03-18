import React from "react";
import { SwitchNetwork } from "./types";
interface Props {
    switchNetwork: SwitchNetwork;
    onDismiss?: () => void;
    chainId: number;
}
declare const SelectNetworkModal: React.FC<Props>;
export default SelectNetworkModal;
