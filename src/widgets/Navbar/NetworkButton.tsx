/** @jsxImportSource theme-ui */
import React from "react";
import { ArrowDropDownIcon } from "../../components/Svg";
import { useNetworkModal, SwitchNetwork } from "../NetworkModal";
import { NETWORK_ICON, NETWORK_LABEL } from "../NetworkModal/config";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import styles from "./styles";

interface Props {
  chainId: number;
  switchNetwork: SwitchNetwork;
  t: (key: string) => string;
}

const NetworkButton: React.FC<Props> = ({ chainId, switchNetwork, t }) => {
  const { onPresentNetworkModal } = useNetworkModal(switchNetwork, chainId, t);
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
      <span style={{ margin: "0px 4px" }} />
      <Text color="text" variant="sm" weight="normal">
        {NETWORK_LABEL[chainId]}
      </Text>
      <ArrowDropDownIcon width="10px" ml="8px" />
    </Button>
  );
};

export default NetworkButton;
