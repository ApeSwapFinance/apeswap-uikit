import React, { useState } from "react";
import { Text } from "../Text";
import Select from "./Select";
import SelectItem from "./SelectItem";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "select" },
    },
    position: {
      control: { type: "select" },
    },
  },
};

export const Default = (args) => {
  const [active, setActive] = useState("item1");

  return (
    <StorybookLayout {...args}>
      <Select active={active} {...args} onChange={(e) => setActive(e.target.value)}>
        <SelectItem value="item1" {...args}>
          <Text sx={{ color: "brown" }}>Item 1 Selected link</Text>
        </SelectItem>
        <SelectItem value="item2" {...args}>
          <Text sx={{ color: "brown" }}>Item 2</Text>
        </SelectItem>
      </Select>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  size: "sm",
  width: "100px",
};
