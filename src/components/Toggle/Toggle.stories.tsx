/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Toggle from "./Toggle";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Toggle {...args} onChange={() => {}} />
  </StorybookLayout>
);

Default.args = {
  checked: false,
  colorMode: "light",
  labels: ["Switch1", "Switch2"],
};
