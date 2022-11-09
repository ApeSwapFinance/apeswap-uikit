/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Flex } from "../../components/Flex";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import { Text } from "../../components/Text";
import { Connected } from "../Navbar/index.stories";
import TutorialModal from "./TutorialModal";
import { TutorialModals } from "./types";
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
  const t = translate;
  return (
    <Flex sx={{ flexDirection: "column", mt: "15px", gap: "5px" }}>
      <Text sx={{ fontSize: "10px", lineHeight: "14px", fontWeight: 700, color: "yellow", textTransform: "uppercase" }}>
        {t("Step 1")}
      </Text>
      <Text sx={{ fontSize: "12px", lineHeight: "14px", fontWeight: 700, textTransform: "uppercase" }}>
        {t("Connect your wallet")}
      </Text>

      <Text sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "18px" }}>
        <Text sx={{ color: "yellow", lineHeight: "18px" }}>
          <a
            href="https://box.genki.io/RJ4LP3"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("Click here")}
          </a>
        </Text>{" "}
        <Text sx={{ fontWeight: 400, lineHeight: "18px" }}>{t("to connect your wallet to ApeSwap.")}</Text>
      </Text>

      <Text sx={{ fontSize: "12px", lineHeight: "18px", fontWeight: 400, fontStyle: "italic" }}>
        <Text sx={{ lineHeight: "18px" }}>{t("Don’t have a wallet?")}</Text>{" "}
        <Text sx={{ fontSize: "12px", lineHeight: "18px", fontWeight: 400 }}>
          {t(`A full setup guide for MetaMask on ${"BNB"} Chain can be found `)}
        </Text>
        <Text sx={{ color: "yellow", lineHeight: "18px" }}>
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
  const t = translate;
  return (
    <Flex sx={{ flexDirection: "column", mt: "15px", gap: "5px" }}>
      <Text sx={{ fontSize: "10px", lineHeight: "14px", fontWeight: 700, color: "yellow", textTransform: "uppercase" }}>
        {t("Step 2")}
      </Text>
      <Text sx={{ fontSize: "12px", lineHeight: "14px", fontWeight: 700, textTransform: "uppercase" }}>
        {t("Supply")}
      </Text>
      <Text sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "18px" }}>
        <Text sx={{ lineHeight: "18px" }}>
          {t("Select your desired market, APPROVE and SUPPLY your assets. You'll earn")}
        </Text>{" "}
        <Text sx={{ lineHeight: "18px", fontWeight: 700 }}>{t("interest,")}</Text>{" "}
        <Text sx={{ lineHeight: "18px" }}>{t("and in some cases, additional BANANA rewards.")}</Text>{" "}
      </Text>

      <Text sx={{ fontSize: "12px", lineHeight: "18px", fontWeight: 400, fontStyle: "italic" }}>
        <Text sx={{ lineHeight: "18px" }}>{t("Check the BANANA Distribution")}</Text>{" "}
        <Text sx={{ lineHeight: "18px", fontWeight: 700 }}>{t("APY")}</Text>{" "}
        <Text sx={{ lineHeight: "18px" }}>{t("for each market.")}</Text>
      </Text>
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
    readyText: "I'm Ready",
    onReady: () => setVisible(!visible),
    type: TutorialModals.LENDING,
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
            readyText="I'm Ready"
            onReady={() => setVisible(!visible)}
            type={TutorialModals.LENDING}
          >
            {[<LendingBody1 />, <LendingBody2 />]}
          </TutorialModal>
        )}
        <Connected />
      </>
    </StorybookLayout>
  );
};
