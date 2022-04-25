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

// -webkit-box-align: center;
//     align-items: center;
//     background-color: #f9f4e7;
//     border: 2px solid #4d4040;
//     color: #4d4040;
//     border-radius: 10px;
//     font-weight: 600;
//     box-shadow: none;
//     cursor: pointer;
//     display: inline-flex;
//     font-size: 16px;
//     width: 100%;
//     height: 44px;
//     line-height: 1;
//     letter-spacing: 0.03em;
//     justify-content: center;
//     outline: 0px;
//     padding: 0px 24px;
//     transition: background-color 0.2s ease 0s;
//     opacity: 1;
//     text-transform: uppercase;
//     margin-bottom: 10px;

const networkBtn = {
  alignItems: "center",
  fontWeight: "bold",
  display: "inline-flex",
  fontSize: "16px",
  height: "44px",
  lineHeight: 1,
  letterSpacing: "0.03em",
  justifyContent: "center",
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
      disabled={networkConfig.chainId === chainId}
      variant="secondary"
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
