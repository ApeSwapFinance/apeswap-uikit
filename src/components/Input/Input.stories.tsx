import React from "react";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
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
    <Input {...args} />
  </StorybookLayout>
);

export const WithIcon = (args: any) => (
  <StorybookLayout {...args}>
    <Input {...args} />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
};

WithIcon.args = {
  colorMode: "light",
  icon: "search",
};
