import React from "react";
import { SwitchNetwork } from "../NetworkModal";
interface Props {
    chainId: number;
    switchNetwork: SwitchNetwork;
}
export declare const NETWORK_ICON: {
    [key: number]: any;
};
declare const NetworkButton: React.FC<Props>;
export default NetworkButton;
