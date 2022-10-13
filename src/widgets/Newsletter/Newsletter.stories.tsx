/** @jsxImportSource theme-ui */
import React  from "react";
import { Button } from "../../components/Button";
import { Flex } from "../../components/Flex";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import Newsletter from "./Newsletter";
import useNewsModal from "./useNewsModal";

export default {
  title: "Widgets/Newsletter",
  component: Newsletter,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const translate: (key: string) => string = (key) => key;

export const Default = (args: any) => {
  const { onPresentNewsModal } = useNewsModal(
    ""
  , translate);

  return (
    <StorybookLayout {...args}>
      <Flex sx={{ paddingTop: 17, flexDirection: "column" }}>
        <Button onClick={onPresentNewsModal}>Open Modal</Button>
        <Newsletter
          mailChimpUrl=""
          t={translate}
        />
      </Flex>
    </StorybookLayout>
  );
}

Default.args = {
  colorMode: "light",
}