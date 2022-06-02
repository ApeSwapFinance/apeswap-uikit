/** @jsxImportSource theme-ui */
import React from "react";
import useLanguageModal from "../../widgets/LanguageModal/useLanguageModal";
import { LanguageIcon } from "../../widgets/Navbar/icons";
import { Flex } from "../Flex";
import { Language } from "../LangSelector/types";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LangSelectorButton: React.FC<Props> = ({ currentLang, langs, setLang, t }) => {
  const { onPresentLanguageModal } = useLanguageModal(currentLang, langs, setLang, t);
  return (
    <Flex sx={{ padding: "0px 15px" }}>
      <LanguageIcon width="30px" cursor="pointer" onClick={onPresentLanguageModal} />
    </Flex>
  );
};

export default React.memo(LangSelectorButton);
