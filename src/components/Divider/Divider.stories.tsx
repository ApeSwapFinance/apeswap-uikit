import React from "react";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import ThemeUIDivider from "./Divider";

export default {
  title: "Components/Divider",
  component: ThemeUIDivider,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <ThemeUIDivider {...args} />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
};
