import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Text } from "../Text";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import StorybookLayout from "../StorybookLayout/StorybookLayout";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "select" },
    },
  },
};

export const Default = (args) => {
  const Title = () => <Text sx={{ color: "brown" }}>Dropdown</Text>;

  return (
    <StorybookLayout {...args}>
      <Router>
        <Dropdown {...args} component={<Title />}>
          <DropdownItem url="/" active {...args}>
            <Text sx={{ color: "brown" }}>Item 1 Selected link</Text>
          </DropdownItem>
          <DropdownItem {...args}>
            <Text sx={{ color: "brown" }}>Item 2</Text>
          </DropdownItem>
        </Dropdown>
      </Router>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  size: "md",
};
