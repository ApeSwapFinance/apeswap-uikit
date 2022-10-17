import React from "react";
import { Modal, ModalHeader } from "../Modal";
import { SwitchNetwork } from "./types";
import { Heading } from "../../components/Heading";
import networks from "./config";
import NetworkCard from "./NetworkCard";
import { Svg } from "../../components/Svg";
import { Flex } from "../../components/Flex";
import styles from "./styles";

interface Props {
  switchNetwork: SwitchNetwork;
  chainId: number;
  t: (key: string) => string;
  onDismiss?: () => void;
}

const SelectNetworkModal: React.FC<Props> = ({ switchNetwork, chainId, t, onDismiss }) => (
  <Modal maxWidth="350px" minWidth="350px" onDismiss={onDismiss}>
    <ModalHeader>
      <Heading as="h4">{t("Network")}</Heading>
    </ModalHeader>
    {networks.map((network) => (
      <NetworkCard networkConfig={network} chainId={chainId} switchNetwork={switchNetwork} key={network.chainId} />
    ))}
    <Flex sx={styles.bridge}>
      <a
        href="https://app.multichain.org/#/router"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginRight: "3px",
        }}
      >
        {t("Bridge Tokens")}
      </a>
      <Svg icon="caret" width="6px" direction="right" />
    </Flex>
  </Modal>
);

SelectNetworkModal.defaultProps = {
  onDismiss: () => null,
};

export default SelectNetworkModal;
