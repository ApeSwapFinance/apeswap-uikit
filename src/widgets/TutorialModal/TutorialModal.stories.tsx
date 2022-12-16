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
import { styles } from "./styles";

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

const Body1 = () => {
  const t = translate;
  return (
    <Flex sx={styles.container}>
      <Text sx={styles.step}>{t("Step 1")}</Text>
      <Text sx={styles.head}>{t("Connect your wallet")}</Text>

      <Text sx={styles.content}>
        <Text sx={styles.yellow}>{t("Click here")}</Text>{" "}
        <Text sx={styles.content}>{t("to connect your wallet to ApeSwap.")}</Text>
      </Text>

      <Text sx={{ ...styles.content, fontStyle: "italic" }}>
        <Text sx={styles.content}>{t("Don’t have a wallet?")}</Text>{" "}
        <Text sx={styles.content}>{t(`A full setup guide for MetaMask on BNB Chain can be found `)}</Text>
        <Text sx={styles.yellow}>
          <a href="void" target="_blank" rel="noreferrer noopener">
            {t("here")}
          </a>
        </Text>
      </Text>
    </Flex>
  );
};

const Body2 = () => {
  const t = translate;
  return (
    <Flex sx={styles.container}>
      <Text sx={styles.step}>{t("Step 2")}</Text>
      <Text sx={styles.head}>{t("Select Tokens & Amount")}</Text>

      <Text sx={styles.content}>
        <Text sx={styles.content}>{t("Select the tokens you want to trade and enter your preferred amount.")}</Text>
      </Text>

      <Text sx={{ ...styles.content, fontStyle: "italic" }}>
        <Text sx={styles.content}>{t(`New to BNB Chain? You might need to`)}</Text>{" "}
        <Text sx={styles.yellow}>
          <a href="void" target="_blank" rel="noreferrer noopener">
            {t("bridge tokens")}
          </a>
        </Text>{" "}
        <Text sx={styles.content}>{t(`first. Always keep spare BNB to account for gas fees.`)}</Text>
      </Text>
    </Flex>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithUseModalNavbar: React.FC = (args: any) => {
  const [visible, setVisible] = useState(true);
  const { onPresentTutorialModal } = useTutorialModal({
    title: "This is the tutorial {title}",
    description: "This is the tutorial {description}",
    t: translate,
    onDismiss: () => setVisible(!visible),
    children: [<>this is the slide content</>, <>fede is hot</>],
    readyText: "I'm Ready",
    type: TutorialModals.BNB_DEX,
  });
  return (
    <StorybookLayout {...args}>
      <Button onClick={onPresentTutorialModal}>open Modal</Button>
      <Connected />
    </StorybookLayout>
  );
};
