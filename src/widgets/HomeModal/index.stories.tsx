import React from "react";
import { HomeModal } from ".";
import { HomeModalProps } from "./types";

export default {
  title: "Widgets/HomeModal",
  component: HomeModal,
  argTypes: {},
};

const Template: React.FC<HomeModalProps> = (args) => <HomeModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  title: "Welcome to ApeSwap’s Farms",
  description: "Start earning passive income with your cryptocurrency!",
  ImageUrl: "",
  ImageDesc: "Farm Monkey",
};
