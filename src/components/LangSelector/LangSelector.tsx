import React from "react";
import { LangType } from "../../widgets/Navbar";
import { Select, SelectItem } from "../Select";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Select size="xsm" active={currentLang} position="top">
    {langs?.map((lang) => (
      <SelectItem key={lang.code} value={lang.language} onClick={() => setLang(lang)} size="xsm">
        {lang.language}
      </SelectItem>
    ))}
  </Select>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
