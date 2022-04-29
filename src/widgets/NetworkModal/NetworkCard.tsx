import React from "react";
import { Button } from "../../components/Button";
import Text from "../../components/Text/Text";
import { SwitchNetwork, Config } from "./types";

interface Props {
  networkConfig: Config;
  chainId: number;
  onDismiss: () => void;
  switchNetwork: SwitchNetwork;
}

const networkBtn = {
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "16px",
  height: "48px",
  letterSpacing: "0.03em",
  padding: "0px 24px",
  transition: " background-color 0.2s ease 0s",
  opacity: 1,
  marginBottom: "10px",
};

const NetworkCard: React.FC<Props> = ({ networkConfig, chainId, onDismiss, switchNetwork }) => {
  const { symbol, icon: Icon } = networkConfig;
  return (
    <Button
      csx={networkBtn}
      fullWidth
      disabled={chainId === networkConfig.chainId}
      variant={chainId === networkConfig.chainId ? "primary" : "secondary"}
      onClick={() => {
        switchNetwork(networkConfig.chainId);
        onDismiss();
      }}
    >
      <Icon width="22px" mr="10px" alignmentBaseline="baseline" />
      <Text bold color="text" mr="16px" textAlign="start">
        {symbol}
      </Text>
    </Button>
  );
};

export default NetworkCard;
