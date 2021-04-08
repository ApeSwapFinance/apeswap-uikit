import { DefaultTheme } from "styled-components";
import getThemeValue from "./getThemeValue";

const getFontFamily = (fontFamily: string | undefined, theme: DefaultTheme): string => {
  return getThemeValue(`fontFamily.${fontFamily}`, "Titan One")(theme);
};

export default getFontFamily;
