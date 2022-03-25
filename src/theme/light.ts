import { DefaultTheme } from "styled-components";
import base from "./base";
import { lightColors } from "./colors";
import { light as lightButton } from "../components/Button/theme";

const lightTheme: Omit<DefaultTheme, "toggle"> = {
  ...base,
  isDark: false,
  colors: lightColors,
  button: lightButton,
};

export default lightTheme;
