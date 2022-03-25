import type { Theme } from "theme-ui";

export const lightTheme: Theme = {
  colors: {
    text: "#000",
    background: "#000",
    primary: "red",
    secondary: "#DAA628",
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
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
  },
  buttons: {
    primary: {
      color: "#000",
      bg: "red",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "#000",
      bg: "#DAA628",
    },
  },
};

export const darkTheme: Theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "red",
    secondary: "#DAA628",
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
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
  },
  buttons: {
    primary: {
      color: "#fff",
      bg: "black",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "#000",
      bg: "#DAA628",
    },
  },
};
