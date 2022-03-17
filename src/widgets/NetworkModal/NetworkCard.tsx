import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { SwitchNetwork, Config } from "./types";

interface Props {
  networkConfig: Config;
  chainId: number;
  onDismiss: () => void;
  switchNetwork: SwitchNetwork;
}

const NetworkCard: React.FC<Props> = ({ networkConfig, chainId, onDismiss, switchNetwork }) => {
  const { symbol, icon: Icon } = networkConfig;
  return (
    <Button
      fullWidth
      disabled={networkConfig.chainId === chainId}
      marginBottom="10px"
      variant="secondary"
      onClick={() => {
        switchNetwork(networkConfig.chainId);
        onDismiss();
      }}
    >
      <Icon width="22px" mr="10px" alignmentBaseline="baseline" />
      <Text fontWeight={600} color="text" mr="16px" textAlign="start">
        {symbol}
      </Text>
    </Button>
  );
};

export default NetworkCard;
