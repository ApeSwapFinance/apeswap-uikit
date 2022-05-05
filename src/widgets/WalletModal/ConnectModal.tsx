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
  onDismiss?: () => void;
  t: (key: string) => string;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, t }) => (
  <Modal title={t("Connect to a wallet")} onDismiss={onDismiss} maxWidth="400px" minWidth="350px">
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        t={t}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    <Flex alignItems="center" justifyContent="center" mt="10px">
      <HelpLink href="https://docs.binance.org/smart-chain/wallet/metamask.html" external color="text">
        <HelpIcon mr="6px" />
        {t("Learn how to connect")}
      </HelpLink>
    </Flex>
  </Modal>
);

ConnectModal.defaultProps = {
  onDismiss: () => null,
};

export default ConnectModal;
