import React from "react";
import IconButton from "./IconButton";
import { Svg } from "../Svg";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    icon: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <IconButton {...args} />
  </StorybookLayout>
);

export const Custom = (args: any) => (
  <StorybookLayout {...args}>
    <IconButton {...args}>
      <Svg color={"white" as any} icon="twitter" />
    </IconButton>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  variant: "primary",
  color: "white",
  icon: "twitter",
};

Custom.args = {
  colorMode: "light",
  variant: "primary",
  color: "white",
};
