import React from "react";
import { useModal } from "../Modal";
import { SwitchNetwork } from "./types";
import SelectNetworkModal from "./SelectNetworkModal";

interface ReturnType {
  onPresentNetworkModal: () => void;
}

const useNetworkModal = (switchNetwork: SwitchNetwork, chainId: number): ReturnType => {
  const [onPresentNetworkModal] = useModal(
    <SelectNetworkModal switchNetwork={switchNetwork} chainId={chainId} />,
    true,
    false,
    "NetworkModal"
  );
  return { onPresentNetworkModal };
};

export default useNetworkModal;
