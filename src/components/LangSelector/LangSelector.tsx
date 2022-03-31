import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
import {LangType} from "../../widgets/Navbar";
import {Colors} from "../../theme/types";
import {Sizes} from "../Button/types";
import {Position} from "../Dropdown/types";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  color: keyof Colors;
  dropdownPosition?: Position;
  buttonScale?: Sizes;
  hideLanguage?: boolean;
}

const LangSelector: React.FC<Props> = ({
  currentLang,
  langs,
  color,
  setLang,
  dropdownPosition = "top",
  buttonScale = "sm",
  hideLanguage = false,
}) => (
  <Dropdown
    position={dropdownPosition}
    size={"sm"}
    component={
      <Button size={buttonScale} variant="text" startIcon={<LanguageIcon width="24px" />}>
        {!hideLanguage && <Text color={color}>{currentLang?.toUpperCase()}</Text>}
      </Button>
    }>
    {langs.map((lang) => (
      <MenuButton
        key={lang.code}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
