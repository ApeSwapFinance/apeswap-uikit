import React from "react";
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

const Template = (args) => <MarketingModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Welcome to ApeSwap's Farms",
  description: "Start earning passive income with your cryptocurrency!",
};
