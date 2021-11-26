import React from "react";
import { useModal } from "../Modal";
import { FuncType } from "./types";
import HomeModal from "./HomeModal";

interface ReturnType {
  onPresentHomeModal: () => void;
}

const useHomeModal = (
  visible: boolean,
  title: string,
  description: string,
  onDismiss: FuncType,
  goToFarms: FuncType,
  connectWallet: FuncType,
  goToLiquidity: FuncType,
  startEarning: FuncType
): ReturnType => {
  const [onPresentHomeModal] = useModal(
    <HomeModal
      visible={visible}
      title={title}
      description={description}
      onDismiss={onDismiss}
      goToFarms={goToFarms}
      goToLiquidity={goToLiquidity}
      connectWallet={connectWallet}
      startEarning={startEarning}
    />
  );
  return { onPresentHomeModal };
};

export default useHomeModal;
