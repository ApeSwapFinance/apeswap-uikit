import React from "react";
import { useModal } from "../Modal";
import TutorialModal from "./TutorialModal";
import { TModalProps } from "./types";

interface ReturnType {
  onPresentTutorialModal: () => void;
}

const useTutorialModal = ({
  children,
  icon,
  title,
  description,
  onDismiss,
  readyText,
  onReady,
  t,
}: TModalProps): ReturnType => {
  const [onPresentTutorialModal] = useModal(
    <TutorialModal
      icon={icon}
      title={title}
      description={description}
      onDismiss={onDismiss}
      readyText={readyText}
      onReady={onReady}
      t={t}
    >
      {children}
    </TutorialModal>,
    true,
    false,
    "TutorialModal"
  );
  return { onPresentTutorialModal };
};

export default useTutorialModal;
