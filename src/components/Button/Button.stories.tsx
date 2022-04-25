import React from "react";
import capitalize from "lodash/capitalize";
import Button from "./Button";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import Flex from "../Flex/Flex";
import { variants } from "./types";
import { LogoIcon } from "../Svg";

const flexStyle = {
  marginBottom: "32px",
  "& > button + button, & > a + a": {
    marginLeft: "16px",
  },
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
  },
};

export const Default = (args: any) => {
  return (
    <StorybookLayout {...args}>
      {Object.values(variants).map((variant) => (
        <Flex sx={flexStyle} key={variant}>
          <Button {...args} variant={variant}>
            {capitalize(variant)}
          </Button>
          <Button {...args} variant={variant} disabled>
            Disabled
          </Button>
          <Button {...args} variant={variant} size="sm">
            Small
          </Button>
        </Flex>
      ))}
    </StorybookLayout>
  );
};

export const WithVariations = (args: any) => {
  return (
    <StorybookLayout {...args}>
      <Flex sx={flexStyle}>
        <Button startIcon={<LogoIcon />}>Start Icon</Button>
        <Button endIcon={<LogoIcon />}>End Icon</Button>
        <Button startIcon={<LogoIcon />} endIcon={<LogoIcon />}>
          Start & End Icon
        </Button>
        <Button startIcon={<LogoIcon />} endIcon={<LogoIcon />}>
          Start & End Icon
        </Button>
      </Flex>
      <Flex sx={flexStyle}>
        <Button load>Loading</Button>
      </Flex>
      <Flex sx={flexStyle}>
        <Button fullWidth>Full Width</Button>
      </Flex>
    </StorybookLayout>
  );
};

Default.args = {
  colorMode: "light",
  variant: "primary",
  disabled: false,
  size: "md",
  load: false,
};
