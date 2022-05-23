import React from "react";
import { Select, SelectItem } from "../Select";
import { Language } from "./types";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Select
    size="xsm"
    active={currentLang}
    position="top"
    onChange={(e) => setLang(langs?.find((lang) => lang.language === e.target.value) || langs[0])}
  >
    {langs?.map((lang) => (
      <SelectItem key={lang.code} value={lang.language} size="xsm">
        {lang.language}
      </SelectItem>
    ))}
  </Select>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
