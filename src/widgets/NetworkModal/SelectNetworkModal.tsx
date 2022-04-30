// import React from "react";
// import styled from "styled-components";
// import { CHAIN_ID } from "config/constants/chains";
// import ReactDOM from "react-dom";
// import { Svg, Button, Text, Modal, ModalHeader } from "@innovationupstream/apeswap-uikit";
// import useSwitchNetwork from "hooks/useSelectNetwork";
// import { SSRContext } from "contexts/SSRContext";
// import { useNetworkChainId } from "state/hooks";

import React, { useContext } from "react";
import { Modal, ModalHeader } from "../Modal";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Svg } from "../../components/Svg";
import { SwitchNetwork } from "./types";
import { Heading } from "../../components/Heading";
import networks from "./config";
import NetworkCard from "./NetworkCard";

// const networks = [
//   {
//     icon: "bsc_token",
//     name: "BSC",
//     chain: 56,
//   },
//   {
//     icon: "polygon_token",
//     name: "POLYGON",
//     chain: 137,
//   },
// ];
interface Props {
  switchNetwork: SwitchNetwork;
  onDismiss?: () => void;
  chainId: number;
}

const SelectNetworkModal: React.FC<Props> = ({ onDismiss = () => null, switchNetwork, chainId }) => (
  <Modal zIndex={200} maxWidth="350px" minWidth="350px" onDismiss={onDismiss}>
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

  // <Modal zIndex={999} onDismiss={onDismiss} maxWidth="350px" minWidth="350px">
  //   <ModalHeader onDismiss={onDismiss}>
  //     <Heading as="h4">Select a Network</Heading>
  //   </ModalHeader>
  //   {networks.map((data) => (
  //     <Button
  //       csx={{
  //         width: "100%",
  //         height: "48px",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         margin: "10px 0",
  //       }}
  //       size="sm"
  //       variant={chainId === data.chain ? "primary" : "secondary"}
  //       onClick={() => switchNetwork(data.chain)}
  //       disabled={chainId === data.chain}
  //     >
  //       <Svg color="yellow" direction="down" icon={data.icon as any} width={22} />
  //       <Text color="info" variant="md" weight="normal" sx={{ margin: "0 10px" }}>
  //         {data.name}
  //       </Text>
  //     </Button>
  //   ))}
  // </Modal>
);

SelectNetworkModal.defaultProps = {
  onDismiss: () => null,
};

export default SelectNetworkModal;
