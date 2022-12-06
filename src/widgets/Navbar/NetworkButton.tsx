/** @jsxImportSource theme-ui */
import React from "react";
import { ArrowDropDownIcon } from "../../components/Svg";
import { useNetworkModal, SwitchNetwork } from "../NetworkModal";
import { NETWORK_ICON, NETWORK_LABEL } from "../NetworkModal/config";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import styles from "./styles";

export interface Props {
  chainId: number;
  switchNetwork: SwitchNetwork;
  t: (key: string) => string;
  supportedChains?: number[];
}

const NetworkButton: React.FC<Props> = ({ chainId, switchNetwork, t, supportedChains }) => {
  const { onPresentNetworkModal } = useNetworkModal(switchNetwork, chainId, t, supportedChains);
  const Icon = NETWORK_ICON[chainId];

  return (
    <Button
      sx={styles.networkBtn}
      variant="tertiary"
      onClick={() => {
        onPresentNetworkModal();
      }}
    >
      <Icon />
      <Text color="text" variant="sm" weight="normal" sx={{ marginLeft: "8px" }}>
        {NETWORK_LABEL[chainId]}
      </Text>
      <ArrowDropDownIcon width="10px" ml="8px" />
    </Button>
  );
};

export default NetworkButton;
