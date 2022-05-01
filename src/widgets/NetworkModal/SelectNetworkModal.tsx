import React from "react";
import { Modal, ModalHeader } from "../Modal";
import { SwitchNetwork } from "./types";
import { Heading } from "../../components/Heading";
import networks from "./config";
import NetworkCard from "./NetworkCard";

interface Props {
  switchNetwork: SwitchNetwork;
  onDismiss?: () => void;
  chainId: number;
}

const SelectNetworkModal: React.FC<Props> = ({ onDismiss = () => null, switchNetwork, chainId }) => (
  <Modal maxWidth="350px" minWidth="350px" onDismiss={onDismiss}>
    <ModalHeader onDismiss={onDismiss}>
      <Heading as="h4">Network</Heading>
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
