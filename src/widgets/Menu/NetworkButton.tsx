import React from "react";
import { useMatchBreakpoints } from "../../hooks";
import ButtonSquare from "../../components/ButtonSquare/ButtonSquare";
import { useNetworkModal, SwitchNetwork } from "../NetworkModal";
import { ChainId, NETWORK_LABEL } from "../NetworkModal/config";
import BinanceChain from "../NetworkModal/icons/BinanceChain";
import PolygonChain from "../NetworkModal/icons/PolygonChain";
import ArrowDropDownSmall from "../../components/Svg/Icons/ArrowDropDownSmall";

interface Props {
  chainId: number;
  switchNetwork: SwitchNetwork;
}

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.BSC]: <BinanceChain width="18px" mr="5px" />,
  [ChainId.BSC_TESTNET]: <BinanceChain width="18px" mr="5px" />,
  [ChainId.MATIC]: <PolygonChain width="18px" mr="5px" />,
  [ChainId.MATIC_TESTNET]: <PolygonChain width="18px" mr="5px" />,
};

const NetworkButton: React.FC<Props> = ({ chainId, switchNetwork }) => {
  const { isXl, isMd } = useMatchBreakpoints();
  const { onPresentNetworkModal } = useNetworkModal(switchNetwork, chainId);

  return (
    <ButtonSquare
      size="sm"
      fontSize={isMd || isXl ? "16px" : "14px"}
      onClick={() => {
        onPresentNetworkModal();
      }}
      variant="tertiary"
      style={{
        textTransform: NETWORK_LABEL[chainId] === "BNB" ? "uppercase" : "capitalize",
      }}
    >
      {NETWORK_ICON[chainId]} {NETWORK_LABEL[chainId]}
      <ArrowDropDownSmall />
    </ButtonSquare>
  );
};

export default NetworkButton;
