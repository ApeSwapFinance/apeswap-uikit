import React, { useState } from "react";
import { MarketModalProps, MarketModal } from ".";
import { Connected } from "../Menu/index.stories";
import ModalContent from "./ModalContent";
import { FarmApe } from "../../components/Image";

export default {
  title: "Widgets/MarketModal",
  component: MarketModal,
  argTypes: {
    onDismiss: { action: "onDismiss" },
    startEarning: { action: "startEarning" },
  },
};

const FarmContent = () => {
  return (
    <ModalContent Icon={<FarmApe />}>
      <p style={{ textAlign: "center" }}>Click here to connect your wallet to ApeSwap.</p>
    </ModalContent>
  );
};

export const ModalWithBackgroundMenu: React.FC<MarketModalProps> = ({
  title = "Welcome to ApeSwap’s Lending Network",
  description = "How does it work?",
  startEarning,
}) => {
  const [visible, setVisible] = useState(true);
  const family = [<FarmContent />, <p>body 1</p>, <p>body 2</p>, <p>body 3</p>];

  return (
    <>
      {visible && (
        <MarketModal
          title={title}
          description={description}
          startEarning={startEarning}
          onDismiss={() => setVisible(false)}
        >
          {family}
        </MarketModal>
      )}
      <Connected />
    </>
  );
};
