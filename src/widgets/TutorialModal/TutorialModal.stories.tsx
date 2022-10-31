/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Flex } from "../../components/Flex";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import { Text } from "../../components/Text";
import { Connected } from "../Navbar/index.stories";
import TutorialModal from "./TutorialModal";
import useTutorialModal from "./useTutorialModal";

export default {
  title: "Widgets/TutorialModal",
  component: TutorialModal,
  argTypes: {
    onDismiss: { action: "onDismiss" },
    title: {},
    description: {},
    readyText: {},
    onReady: { action: "onReady" },
  },
};

const translate: (key: string) => string = (key) => key;


const LendingBody1 = () => {
  const t = translate
  return (
    <Flex sx={{ flexDirection: "column", mt: '15px' }}>
      <Text sx={{ fontSize: "10px", lineHeight: "14px", fontWeight: 700, color: "yellow" }}>Step 1</Text>
      <Text sx={{ fontSize: "12px", lineHeight: "14px", fontWeight: 700, textTransform: "uppercase" }}>
        Connect your wallet
      </Text>
      <Text sx={{ fontSize: "12px", lineHeight: "14px", fontWeight: 400 }}>
        <Text sx={{ color: "yellow" }}>
          <a
            href="https://box.genki.io/RJ4LP3"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("Click here")}
          </a>
        </Text>{" "}
        <Text>
          {t("to connect your wallet to ApeSwap.")}
        </Text>
      </Text>
      <Text sx={{ fontSize: "12px", lineHeight: "14px", fontWeight: 400, fontStyle: "italic" }}>
        <Text sx={{ color: "yellow" }}>
          <a
            href="https://box.genki.io/RJ4LP3"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("Don’t have a wallet?")}
          </a>
        </Text>{" "}
        <Text>{t("A full setup guide for MetaMask on BNB Chain can be found ")}</Text>
        <Text sx={{ color: "yellow" }}>
          <a
            href="https://box.genki.io/RJ4LP3"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("here")}
          </a>
        </Text>
      </Text>
    </Flex>
  );
};
const LendingBody2 = () => {
  return (
    <Flex sx={{}}>
      <p>something</p>
    </Flex>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithUseModalNavbar: React.FC = (args: any) => {
  const [visible, setVisible] = useState(true);
  const { onPresentTutorialModal } = useTutorialModal({
    title: "ApeSwap's Lending Network",
    description: "Supply, borrow, and earn!",
    t: translate,
    onDismiss: () => setVisible(!visible),
    children: [<LendingBody1 />, <LendingBody2 />],
    icon: `url(images/marketing-modals/emailApe.svg)`,
    readyText: "I'm Ready",
    onReady: () => setVisible(!visible),
  });
  return (
    <StorybookLayout {...args}>
      <Button onClick={onPresentTutorialModal}>open Modal</Button>
      <Connected />
    </StorybookLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithNavbar: React.FC = (args: any) => {
  const [visible, setVisible] = useState(true);
  return (
    <StorybookLayout {...args}>
      <>
        {visible && (
          <TutorialModal
            title="ApeSwap's Lending Network"
            description="Supply, borrow, and earn!"
            t={translate}
            onDismiss={() => setVisible(!visible)}
            // eslint-disable-next-line react/jsx-curly-brace-presence
            icon={`url(images/marketing-modals/emailApe.svg`}
            readyText="I'm Ready"
            onReady={() => setVisible(!visible)}
          >
            {[<LendingBody1 />, <LendingBody2 />]}
          </TutorialModal>
        )}
        <Connected />
      </>
    </StorybookLayout>
  );
};
