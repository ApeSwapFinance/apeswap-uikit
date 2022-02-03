import type { Theme } from "theme-ui";
import Colors from "./colors";
import baseTheme, { breakpointMap } from "./base";

const buttonBaseStyles = {
  borderRadius: "normal",
  padding: "10px 20px 10px 19px",
  fontSize: 2,
  cursor: "pointer",
  fontWeight: "bold",
};

const Apeswap: Theme = {
  ...baseTheme,
  colors: Colors,
  text: {
    heading: {
      fontFamily: "poppins",
      fontWeight: "bold",
    },
    lg: { fontSize: 6, lineHeight: "33px" },
    md: { fontSize: 3, lineHeight: "24px" },
    sm: { fontSize: 1, lineHeight: "18px" },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      color: "text",
      bg: "background",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    nav: {
      breakpoints: [`@media screen and (min-width: ${breakpointMap.lg}px)`],
    },
    progress: {
      primary: "primary",
      color: "green",
      background: "#DAA628",
      height: "20px",
    },
    hr: {
      background: "dividerColor",
      height: "1px",
      border: "none",
    },
    h1: {
      variant: "text.heading",
      fontSize: "30px",
      lineHeight: "45px",
    },
    h2: {
      variant: "text.heading",
      fontSize: "25px",
      lineHeight: "37px",
    },
    h3: {
      variant: "text.heading",
      fontSize: "22px",
      lineHeight: "33px",
    },
    h4: {
      variant: "text.heading",
      fontSize: "20px",
      lineHeight: "30px",
    },
    h5: {
      variant: "text.heading",
      fontSize: "16px",
      lineHeight: "24px",
    },
    banner: {
      variant: "text.heading",
      fontWeight: "800",
      fontSize: "60px",
      lineHeight: "66px",
    },
  },
  forms: {
    textarea: {
      padding: "10px 13px 10px 10px",
      borderRadius: "normal",
      border: "none",
      fontWeight: "normal",
      background: "lvl1",
      resize: "none",
      color: "textareaColor",
      "&:focus": {
        outline: "none !important",
      },
    },
  },
  borders: {
    primaryButton: "3px solid #FFB300",
    primaryBtnDisable: "3px solid transparent",
    secondaryButton: "3px solid #FFB300",
    secondaryButtonDisable: "3px solid #FDFBF5",
    mode: {
      dark: {
        secondaryButtonDisable: "3px solid #F9F4E7",
      },
    },
  },
  buttons: {
    primary: {
      ...buttonBaseStyles,
      background: "yellow",
      color: "primaryBright",
      border: "primaryButton",

      "&:disabled": {
        cursor: "not-allowed",
        background: "white3",
        color: "primaryButtonDisable",
        border: "primaryBtnDisable",
      },
    },
    secondary: {
      ...buttonBaseStyles,
      background: "white2",
      border: "secondaryButton",
      color: "yellow",

      "&:disabled": {
        cursor: "not-allowed",
        background: "white3",
        border: "secondaryButtonDisable",
        color: "secondaryButtonDisableColor",
      },
    },
  },
  cards: {
    primary: {
      background: "navbar",
      borderRadius: "normal",
    },
  },
};

export default Apeswap;
