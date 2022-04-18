import React from "react";
import styled from "styled-components";
import { ArrowDropDownIcon } from "../../components/Svg";
import Button from "../../components/Button/Button";
import { SwitchNetwork } from "./types";
import useNetworkModal from "./useNetworkModal";
import { ChainId, NETWORK_LABEL } from "./config";
import BinanceChain from "./icons/BinanceChain";
import PolygonChain from "./icons/PolygonChain";

interface Props {
  chainId: number;
  switchNetwork: SwitchNetwork;
}

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 10px;
  padding: 0px 15px 0px 10px;
  :focus {
    box-shadow: none !important;
  }
`;

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.BSC]: <BinanceChain width="23px" mr="8px" />,
  [ChainId.BSC_TESTNET]: <BinanceChain width="23px" mr="8px" />,
  [ChainId.MATIC]: <PolygonChain width="23px" mr="8px" />,
  [ChainId.MATIC_TESTNET]: <PolygonChain width="23px" mr="8px" />,
};

const NetworkButton: React.FC<Props> = ({ chainId, switchNetwork }) => {
  const { onPresentNetworkModal } = useNetworkModal(switchNetwork, chainId);

  return (
    <StyledButton
      size="sm"
      variant="secondary"
      color="text"
      onClick={() => {
        onPresentNetworkModal();
      }}
    >
      {NETWORK_ICON[chainId]} {NETWORK_LABEL[chainId]} <ArrowDropDownIcon width="10px" ml="8px" />
    </StyledButton>
  );
};

export default NetworkButton;
