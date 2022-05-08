import React from "react";
import { Modal, ModalHeader } from "../Modal";
import { SwitchNetwork } from "./types";
import { Heading } from "../../components/Heading";
import networks from "./config";
import NetworkCard from "./NetworkCard";

interface Props {
  switchNetwork: SwitchNetwork;
  chainId: number;
  t: (key: string) => string;
}

const SelectNetworkModal: React.FC<Props> = ({ switchNetwork, chainId, t }) => (
  <Modal maxWidth="350px" minWidth="350px">
    <ModalHeader>
      <Heading as="h4">{t("Network")}</Heading>
    </ModalHeader>
    {networks.map((network) => (
      <NetworkCard networkConfig={network} chainId={chainId} switchNetwork={switchNetwork} key={network.chainId} />
    ))}
  </Modal>
);

export default SelectNetworkModal;
