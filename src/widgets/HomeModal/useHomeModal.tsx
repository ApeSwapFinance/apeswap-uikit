import React from "react";
import { useModal } from "../Modal";
import { FuncType } from "./types";
import HomeModal from "./HomeModal";

interface ReturnType {
  onPresentHomeModal: () => void;
}

const useHomeModal = (
  title: string,
  description: string,
  goToFarms: FuncType,
  connectWallet: FuncType,
  goToLiquidity: FuncType,
  startEarning: FuncType
): ReturnType => {
  const [onPresentHomeModal] = useModal(
    <HomeModal
      title={title}
      description={description}
      onDismiss={() => null}
      goToFarms={goToFarms}
      goToLiquidity={goToLiquidity}
      connectWallet={connectWallet}
      startEarning={startEarning}
    />
  );
  return { onPresentHomeModal };
};

export default useHomeModal;
