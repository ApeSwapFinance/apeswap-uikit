import React from "react";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    weight: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Text {...args}>Lorem Ipsum Text</Text>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  variant: "lg",
  weight: "bold",
  color: "text",
};
