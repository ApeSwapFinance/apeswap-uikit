import { DefaultTheme } from "styled-components";
import { light as lightToggle } from "../components/Toggle/theme";
import { light as lightNav } from "../widgets/Menu/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  toggle: lightToggle,
  nav: lightNav,
};

export default lightTheme;
