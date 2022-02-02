import React from "react";
import IconSVG from "./IconSVG";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/IconSVG",
  component: IconSVG,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    icon: {
      control: { type: "select" },
    },
    direction: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <IconSVG {...args} />
  </StorybookLayout>
);

Default.args = {
  icon: "caret",
  color: "brown",
  width: 40,
};
