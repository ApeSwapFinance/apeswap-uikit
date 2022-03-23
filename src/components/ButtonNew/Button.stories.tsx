import React from "react";
import Button from "./Button";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Button New",
  component: Button,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Button {...args}>APESWAP</Button>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  variant: "primary",
  disabled: false,
  size: "md",
};
