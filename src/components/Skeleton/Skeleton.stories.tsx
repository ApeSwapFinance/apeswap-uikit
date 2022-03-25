import React, { useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    animation: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
    },
  },
};

export const Default: React.FC = (args: any) => (
  <StorybookLayout {...args}>
    <Skeleton {...args} />
  </StorybookLayout>
);

export const Avatar = Default.bind({});
Avatar.args = {
  width: "40px",
  height: "40px",
  variant: "circle",
  colorMode: "dark",
  animation: "waves",
};

export const Block = Default.bind({});
Block.args = {
  height: "200px",
  width: "100%",
  animation: "waves",
  colorMode: "dark",
  variant: "rect",
};
