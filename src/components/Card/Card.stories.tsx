import React from "react";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    background: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Card {...args} />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  padding: 4,
  background: "lvl1",
};
