/** @jsxImportSource theme-ui */
import React, { useContext } from "react";
import { Button } from "../../components/Button";
import Text from "../../components/Text/Text";
import { SwitchNetwork, Config } from "./types";
import { Context as ModalContext } from "../Modal/ModalContext";

interface Props {
  networkConfig: Config;
  chainId: number;
  switchNetwork: SwitchNetwork;
}

const networkBtn = {
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  height: "48px",
  letterSpacing: "0.03em",
  padding: "0px 24px",
  marginBottom: "10px",
  opacity: 1,
};

const NetworkCard: React.FC<Props> = ({ networkConfig, chainId, switchNetwork }) => {
  const { handleClose } = useContext(ModalContext);
  const { symbol, icon: Icon } = networkConfig;
  return (
    <Button
      sx={networkBtn}
      size="sm"
      fullWidth
      variant={chainId === networkConfig.chainId ? "secondary" : "tertiary"}
      onClick={() => {
        switchNetwork(networkConfig.chainId);
        handleClose();
      }}
    >
      <Icon width="22px" alignmentBaseline="baseline" />
      <span style={{ margin: "0px 4px" }} />
      <Text weight="normal" color="text" mr="16px" textAlign="start">
        {symbol}
      </Text>
    </Button>
  );
};

export default NetworkCard;
