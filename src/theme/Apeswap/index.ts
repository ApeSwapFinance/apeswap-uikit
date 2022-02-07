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
    checkbox: {
      background: "lvl1",
      borderRadius: "5px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "lvl2",
      boxShadow: "none",
      outline: "none",
      appearance: "none",
      width: "inherit",
      height: "inherit",
      margin: "0px",
      cursor: "pointer",
      transition: "border-color 0.2s ease-in-out",
      "& + svg": {
        display: "none",
        position: "absolute",
        pointerEvents: "none",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
      },
      "&:checked ": {
        background: "yellow",
        borderColor: "yellow",
        "& + svg": {
          display: "block",
        },
      },
      "&:focus": {
        outline: "none",
        boxShadow: "0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)",
      },
      "&:hover:not(:disabled):not(:checked)": {
        boxShadow: "0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)",
      },
    },
    radio: {
      background: "lvl1",
      borderRadius: "50px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "lvl2",
      boxShadow: "none",
      outline: "none",
      appearance: "none",
      width: "inherit",
      height: "inherit",
      margin: "0px",
      cursor: "pointer",
      transition: "border-color 0.2s ease-in-out",
      "& + span": {
        display: "none",
        position: "absolute",
        pointerEvents: "none",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
        backgroundColor: "radioChecked",
        borderRadius: "50px",
      },
      "&:checked ": {
        background: "yellow",
        borderColor: "yellow",
        "& + span": {
          display: "block",
        },
      },
      "&:focus": {
        outline: "none",
        boxShadow: "0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)",
      },
      "&:hover:not(:disabled):not(:checked)": {
        boxShadow: "0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)",
      },
    },
    label: {
      inline: {
        display: "inline-flex",
        alignItems: "center",
        columnGap: 2,
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
