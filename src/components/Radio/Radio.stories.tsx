import React from "react";
import { Label } from "theme-ui";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
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

export const Default = (args: any) => {
  return (
    <StorybookLayout {...args}>
      <form>
        <Label sx={{ variant: "forms.label.inline", cursor: "pointer" }}>
          <Radio {...args} name="test" value="1" />
          Option 1
        </Label>
        <Label sx={{ variant: "forms.label.inline", marginTop: "15px", cursor: "pointer" }}>
          <Radio {...args} name="test" value="2" />
          Option 2
        </Label>
      </form>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  scale: "sm",
};
