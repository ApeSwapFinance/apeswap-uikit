import React from "react";
import { useModal } from "../Modal";
import NewsModal from "./NewsModal";

interface ReturnType {
  onPresentNewsModal: () => void;
}

const useNewsModal = (mailChimpUrl: string, t: (key: string) => string): ReturnType => {
  const [onPresentNewsModal] = useModal(
    <NewsModal mailChimpUrl={mailChimpUrl} t={t} isNewsModal />,
    true,
    false,
    "NewsModal"
  );
  return { onPresentNewsModal };
};

export default useNewsModal;
