import React from "react";
import styled from "styled-components";
import { ArrowDropDownIcon } from "../../components/Svg";
import { useNetworkModal, SwitchNetwork } from "../NetworkModal";
import { ChainId, NETWORK_LABEL } from "../NetworkModal/config";
import PolygonChain from "../NetworkModal/icons/PolygonChain";
import BinanceChain from "../NetworkModal/icons/BinanceChain";
import { IconButton } from "../../components/Button";
import { Text } from "../../components/Text";
import styles from "./styles";

interface Props {
  chainId: number;
  switchNetwork: SwitchNetwork;
}

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.BSC]: <BinanceChain width="23px" mr="8px" />,
  [ChainId.BSC_TESTNET]: <BinanceChain width="23px" mr="8px" />,
  [ChainId.MATIC]: <PolygonChain width="23px" mr="8px" />,
  [ChainId.MATIC_TESTNET]: <PolygonChain width="23px" mr="8px" />,
};

const NetworkButton: React.FC<Props> = ({ chainId, switchNetwork }) => {
  const { onPresentNetworkModal } = useNetworkModal(switchNetwork, chainId);

  return (
    <IconButton
      sx={styles.networkBtn}
      onClick={() => {
        onPresentNetworkModal();
      }}
    >
      {NETWORK_ICON[chainId]}
      <Text color="text" variant="sm" weight="bold">
        {NETWORK_LABEL[chainId]}
      </Text>
      <ArrowDropDownIcon width="10px" ml="8px" />
    </IconButton>
  );
};

export default NetworkButton;
