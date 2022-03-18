import React from "react";
import { Box } from "theme-ui";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    scale: {
      control: { type: "select" },
    },
    display: {
      options: ["inline", "inline-block", "block", "flex"],
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => (
  <StorybookLayout {...args}>
    <Checkbox {...args} onChange={(e) => console.log("====== checkbox", e)} />
  </StorybookLayout>
);

Default.args = {
  colorMode: "light",
  scale: "md",
};
