import React from "react";
import ProfileIcon from "./ProfileIcon";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/ProfileIcon",
  component: ProfileIcon,
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
      <ProfileIcon {...args} />
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
};
