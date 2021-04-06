import { DefaultTheme } from "styled-components";
import getThemeValue from "./getThemeValue";

const getFontFamily = (fontFamily: string, theme: DefaultTheme): string => {
  return fontFamily ? getThemeValue(`fontFamily.${fontFamily}`, fontFamily)(theme) : "Titan One";
};

export default getFontFamily;