import React from "react";
import { useModal } from "../Modal";
import { SwitchNetwork } from "./types";
import SelectNetworkModal from "./SelectNetworkModal";
import { ChainId } from "./config";

interface ReturnType {
  onPresentNetworkModal: () => void;
}

const useNetworkModal = (
  switchNetwork: SwitchNetwork,
  chainId: number,
  t: (key: string) => string,
  supportedChains?: ChainId[]
): ReturnType => {
  const [onPresentNetworkModal] = useModal(
    <SelectNetworkModal switchNetwork={switchNetwork} chainId={chainId} t={t} supportedChains={supportedChains} />,
    true,
    false,
    "NetworkModal"
  );
  return { onPresentNetworkModal };
};

export default useNetworkModal;
