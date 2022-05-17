import React from "react";
import StorybookLayout from "../StorybookLayout/StorybookLayout";
import { Flex } from "../Flex";
import RunFiatButton from "./RunFiatButton";

export default {
  title: "Components/RunFiatButton",
  component: RunFiatButton,
  argTypes: {},
};

export const Variants = (args: any) => {
  const clickedFiat = () => console.info("Fiat Clicked!!!");
  return (
    <StorybookLayout {...args}>
      <Flex style={{ flexDirection: "column", justifyContent: "space-between", height: "100px" }}>
        <RunFiatButton {...args} runFiat={clickedFiat} />
        <RunFiatButton {...args} runFiat={clickedFiat} mini />
      </Flex>
    </StorybookLayout>
  );
};
