import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#af6e5aff",
  primaryBright: "#ffd54fff",
  primaryDark: "#0098A1",
  secondary: "#965a50ff",
  success: "#31D0AA",
  warning: "#FFB237",
  green: "#009859ff",
  yellow: "#FFB300",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#965a50ff",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#af6e5aff;",
  textDisabled: "#BDC2C4",
  textSubtle: "#009859ff",
  borderColor: "#965a50ff",
  card: "#FFFFFF",
  yellow: "#FFB300",
  white: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#009859ff",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#27262c",
  yellow: "#FFB300",
  white: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
