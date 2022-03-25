import React from "react";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Textarea from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Textarea {...args} />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  rows: 4,
};
