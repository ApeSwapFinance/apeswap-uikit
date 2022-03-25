/** @jsxImportSource theme-ui */
import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Flex/Flex";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import useWalletModal from "./useWalletModal";

export default {
  title: "Widgets/WalletModal",
  argTypes: {
    argTypes: {
      colorMode: {
        options: ["light", "dark"],
        control: { type: "inline-radio" },
      },
    },
  },
};

export const Wallet = (args: any) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    () => null,
    () => null,
    "0xbdda50183d817c3289f895a4472eb475967dc980"
  );
  return (
    <StorybookLayout {...args}>
      <Flex>
        <Button onClick={onPresentConnectModal}>Open connect modal</Button>
        <Button onClick={onPresentAccountModal}>Open account modal</Button>
      </Flex>
    </StorybookLayout>
  );
};

Wallet.args = {
  colorMode: "light",
};
