import React, { useState } from "react";
import { MarketModalProps, MarketModal } from ".";
import { Connected } from "../Menu/index.stories";

export default {
  title: "Widgets/MarketingModal",
  component: MarketModal,
  argTypes: {
    onDismiss: { action: "onDismiss" },
    startEarning: { action: "startEarning" },
  },
};

export const ModalWithBackgroundMenu: React.FC<MarketModalProps> = ({
  title = "Welcome to ApeSwap's Farms",
  description = "Start earning passive income with your cryptocurrency!",
  startEarning,
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <MarketModal
          title={title}
          description={description}
          startEarning={startEarning}
          onDismiss={() => setVisible(false)}
        />
      )}
      <Connected />
    </>
  );
};
