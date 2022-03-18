import React from "react";
import { PanelProps, PushedProps } from "./types";
interface MobileNavMenuProps extends PanelProps, PushedProps {
    isMobile: boolean;
    isPushed: boolean;
    showMenu: boolean;
    chainId: number;
    switchNetwork: (chainId: number) => void;
}
declare const MobileNavMenu: React.FC<MobileNavMenuProps>;
export default MobileNavMenu;
