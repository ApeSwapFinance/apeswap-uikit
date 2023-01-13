/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Button } from "../../components/Button";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
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

export const WithUseModalNavbar: React.FC = (args: any) => {
  const [visible, setVisible] = useState(true);
  const { onPresentTutorialModal } = useTutorialModal({
    title: "This is the tutorial {title}",
    description: "This is the tutorial {description}",
    t: translate,
    onDismiss: () => setVisible(!visible),
    children: [<>slide content 1</>, <>second slide content</>],
    type: "migrate",
    isConnected: true,
    width: "280px",
  });
  return (
    <StorybookLayout {...args}>
      <Button onClick={onPresentTutorialModal}>open Modal</Button>
      <Connected />
    </StorybookLayout>
  );
};
