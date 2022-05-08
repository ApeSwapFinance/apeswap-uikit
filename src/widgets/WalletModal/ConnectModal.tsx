import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { Flex } from "../../components/Flex";

interface Props {
  login: Login;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login }) => (
  <Modal title="Connect to a wallet" maxWidth="400px" minWidth="350px">
    {config.map((entry, index) => (
      <WalletCard key={entry.title} login={login} walletConfig={entry} mb={index < config.length - 1 ? "8px" : "0"} />
    ))}
    <Flex sx={{ alignItems: "center", justifyContent: "center" }} mt="10px">
      <HelpLink href="https://docs.binance.org/smart-chain/wallet/metamask.html" external color="text">
        <HelpIcon mr="6px" />
        Learn how to connect
      </HelpLink>
    </Flex>
  </Modal>
);

export default ConnectModal;
