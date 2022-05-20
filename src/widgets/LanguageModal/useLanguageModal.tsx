import React from "react";
import { useModal } from "../Modal";
import SelectLanguageModal from "./SelectLanguageModal";
import { Language } from "../../components/LangSelector/types";

interface ReturnType {
  onPresentLanguageModal: () => void;
}

const useLanguageModal = (
  currentLang: string,
  langs: Language[],
  setLang: (lang: Language) => void,
  t: (key: string) => string
): ReturnType => {
  const [onPresentLanguageModal] = useModal(
    <SelectLanguageModal currentLang={currentLang} langs={langs} setLang={setLang} t={t} />,
    true,
    true,
    "LanguageModal"
  );
  return { onPresentLanguageModal };
};

export default useLanguageModal;
