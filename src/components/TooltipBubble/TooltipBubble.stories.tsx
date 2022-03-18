import React from "react";
import { Box } from "theme-ui";
import { Text } from "../Text";
import { Button } from "../Button";
import TooltipBubble from "./TooltipBubble";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import { LinkExternal } from "../Link";
import TooltipBody from "./TooltipBody";

export default {
  title: "Components/TooltipBubble",
  component: TooltipBubble,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
    placement: {
      control: { type: "select" },
      defaultValue: "bottomRight",
    },
  },
};

export const JustText = (args: any) => {
  const body = <Text variant="sm">Just Text. Variant 4</Text>;

  return (
    <StorybookLayout {...args}>
      <TooltipBubble {...args} body={body}>
        <Button variant="secondary">Just Text. Variant 4</Button>
      </TooltipBubble>
    </StorybookLayout>
  );
};

export const SingleText = (args: any) => {
  const body = (
    <>
      <Text variant="sm">Just Text. Variant 3</Text>
      <Box mt="10px">
        <LinkExternal display="block" textAlign="center" href="https://apeswap.finance" target="_blank">
          Urlhere
        </LinkExternal>
        <LinkExternal display="block" textAlign="center" href="https://apeswap.finance" target="_blank">
          Urlhere
        </LinkExternal>
      </Box>
    </>
  );

  return (
    <StorybookLayout {...args}>
      <TooltipBubble {...args} body={body}>
        <Button variant="secondary">Just Text. Variant 3</Button>
      </TooltipBubble>
    </StorybookLayout>
  );
};

export const WithLinks = (args: any) => {
  const body = (
    <>
      <TooltipBody>
        <Text variant="sm">Multiplier Var 2:</Text>
        <Text variant="sm">X35</Text>
      </TooltipBody>
      <TooltipBody>
        <Text variant="sm">Stake:</Text>
        <Text variant="sm">BANANA-BNB LP</Text>
      </TooltipBody>
      <Box mt="10px">
        <LinkExternal display="block" textAlign="center" href="https://google.com" target="_blank">
          Urlhere
        </LinkExternal>
        <LinkExternal display="block" textAlign="center" href="https://google.com" target="_blank">
          Urlhere
        </LinkExternal>
      </Box>
    </>
  );

  return (
    <StorybookLayout {...args}>
      <TooltipBubble {...args} body={body}>
        <Button variant="secondary">WithLinks Longer stuff</Button>
      </TooltipBubble>
    </StorybookLayout>
  );
};

export const WithoutLinks = (args: any) => {
  const body = (
    <>
      <TooltipBody>
        <Text variant="sm">Multiplier Var 1:</Text>
        <Text variant="sm">X35</Text>
      </TooltipBody>
      <TooltipBody>
        <Text variant="sm">Stake:</Text>
        <Text variant="sm">BANANA-BNB LP</Text>
      </TooltipBody>
    </>
  );

  return (
    <StorybookLayout {...args}>
      <TooltipBubble {...args} body={body}>
        <Button variant="secondary">WithoutLinks</Button>
      </TooltipBubble>
    </StorybookLayout>
  );
};
