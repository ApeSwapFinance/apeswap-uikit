import React from "react";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    as: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Heading {...args}>Heading</Heading>
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  as: "h1",
  banner: false,
};
