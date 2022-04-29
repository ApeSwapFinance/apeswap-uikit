import React from "react";
import styled from "styled-components";
import networks from "./config";
import { Modal, ModalHeader } from "../Modal";
import { Heading } from "../../components/Heading";
import NetworkCard from "./NetworkCard";
import { SwitchNetwork } from "./types";

interface Props {
  switchNetwork: SwitchNetwork;
  onDismiss?: () => void;
  chainId: number;
}

const StyledModal = styled(Modal)`
  background: "red";
`;

const SelectNetworkModal: React.FC<Props> = ({ onDismiss = () => null, switchNetwork, chainId }) => (
  <StyledModal zIndex={200} maxWidth="350px" minWidth="350px" onDismiss={onDismiss}>
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
  </StyledModal>
);

SelectNetworkModal.defaultProps = {
  onDismiss: () => null,
};

export default SelectNetworkModal;
