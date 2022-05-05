import React from "react";
import { Heading } from "../../components/Heading";
import { Modal, ModalHeader } from "../Modal";
import networks from "./config";
import NetworkCard from "./NetworkCard";
import { SwitchNetwork } from "./types";

interface Props {
  switchNetwork: SwitchNetwork;
  onDismiss?: () => void;
  chainId: number;
  t: (key: string) => string;
}

const SelectNetworkModal: React.FC<Props> = ({ onDismiss = () => null, switchNetwork, chainId, t }) => (
  <Modal onDismiss={onDismiss} minWidth="350px">
    <ModalHeader onDismiss={onDismiss}>
      <Heading>{t("Network")}</Heading>
    </ModalHeader>
    {networks.map((network) => (
      <NetworkCard
        networkConfig={network}
        chainId={chainId}
        switchNetwork={switchNetwork}
        onDismiss={onDismiss}
        key={network.chainId}
      />
    ))}
  </Modal>
);

SelectNetworkModal.defaultProps = {
  onDismiss: () => null,
};

export default SelectNetworkModal;
