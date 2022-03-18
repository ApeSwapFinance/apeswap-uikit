import React from "react";
import Progress from "./Progress";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args: any) => {
  return (
    <StorybookLayout {...args}>
      <div style={{ padding: "32px", width: "400px" }}>
        <Progress {...args} />
      </div>
    </StorybookLayout>
  );
};

Default.args = {
  height: "15px",
  width: "300px",
  to: 70,
};
