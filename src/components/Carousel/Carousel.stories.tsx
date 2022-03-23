import React from "react";
import Carousel from "./Carousel";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Carousel {...args} />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  slides: [
    "https://dummyimage.com/800x400/000000/ffffff",
    "https://dummyimage.com/900x500/ffa0a0",
    "https://dummyimage.com/1000x600/a0ffa0",
    "https://dummyimage.com/900x500/a0a0ff",
  ],
  controls: true,
  autoPlay: true,
  interval: 4000,
  hideIndicator: false,
  defaultSlide: 0,
};
