import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";
import { dark as darkButton } from "../components/Button/theme";

const darkTheme: Omit<DefaultTheme, "toggle"> = {
  ...base,
  isDark: true,
  colors: darkColors,
  button: darkButton,
};

export default darkTheme;
