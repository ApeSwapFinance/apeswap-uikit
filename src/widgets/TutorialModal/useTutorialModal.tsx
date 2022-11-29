import React from "react";
import { useModal } from "../Modal";
import TutorialModal from "./TutorialModal";
import { TModalProps } from "./types";

interface ReturnType {
  onPresentTutorialModal: () => void;
}

const useTutorialModal = ({
  type,
  children,
  title,
  description,
  onDismiss,
  readyText,
  t,
}: TModalProps): ReturnType => {
  const [onPresentTutorialModal] = useModal(
    <TutorialModal
      type={type}
      title={title}
      description={description}
      onDismiss={onDismiss}
      readyText={readyText}
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
