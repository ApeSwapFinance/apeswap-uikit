import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
import { LangType } from "../../widgets/Navbar";
import { Colors } from "../../theme/types";
import { Position } from "../Dropdown/types";

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  color: keyof Colors;
  dropdownPosition?: Position;
  hideLanguage?: boolean;
  buttonScale?: "sm" | "md" | "lg" | undefined;
}

const LangSelector: React.FC<Props> = ({
  currentLang,
  langs,
  setLang,
  buttonScale = "sm",
  dropdownPosition = "top",
  hideLanguage = false,
  color,
}) => (
  <Dropdown
    position={dropdownPosition}
    size="sm"
    component={
      <div
        style={{
          paddingLeft: "18px",
          paddingRight: "10px",
        }}
      >
        <Button size={buttonScale} variant="text" style={{ padding: 0 }}>
          {!hideLanguage && <Text>{currentLang?.toUpperCase()}</Text>}
        </Button>
      </div>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.code}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        sx={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

LangSelector.defaultProps = {
  dropdownPosition: "top",
  buttonScale: "md",
  hideLanguage: false,
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
