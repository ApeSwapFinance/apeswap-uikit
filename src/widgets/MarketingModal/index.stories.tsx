import React, { useState } from "react";
import { MktModalProps } from ".";
import MarketingModal from "./MarketingModal";

export default {
  title: "Widgets/MarketingModal",
  component: MarketingModal,
  argTypes: {
    onDismiss: { action: "onDismiss" },
    goToFarms: { action: "goToFarms" },
    goToLiquidity: { action: "goToLiquidity" },
    connectWallet: { action: "connectWallet" },
    startEarning: { action: "startEarning" },
  },
};

export const Default: React.FC<MktModalProps> = ({
  title = "Welcome to ApeSwap's Farms",
  description = "Start earning passive income with your cryptocurrency!",
  connectWallet,
  goToFarms,
  goToLiquidity,
  startEarning,
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <MarketingModal
          title={title}
          description={description}
          connectWallet={connectWallet}
          goToFarms={goToFarms}
          goToLiquidity={goToLiquidity}
          startEarning={startEarning}
          onDismiss={() => setVisible(false)}
        />
      )}
    </>
  );
};
