import { Colors } from "./types";

export const baseColors = {
  error: "#DF4141",
  success: "#38A611",
  primary: "#4D4040",
  yellow: "#FFB300",
  yellowHover: "#ffd54fFF",
  primaryBright: "#FAFAFA",
  primaryDark: "#0B0B0B",
  primaryGray: "#4D40407F",
  gray: "#7A7A7A",
  inputBorder: "#E6DECB",
  brown: "#A16552",
  smartGradient: "linear-gradient(94.44deg, #BA801E -9.73%, #E7CF67 40.14%, #BA801E 93.01%)",
  listTagBg: {
    ape: "linear-gradient(99.09deg, rgba(161, 101, 82, 0.8) 0%, rgba(255, 179, 0, 0.8) 106.96%)",
    uni: "rgba(213, 49, 113, 0.8)",
    ark: "rgba(208, 126, 90, 0.8)",
    hot: "#DF4141",
    new: "#38A611",
    auto: "#DF4141",
    max: "#38A611",
  },
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FDFBF5",
  backgroundDisabled: "#E9EAEB",
  black: "#000000",
  dividerColor: "#E2E2E2",
  navbar: "#F9F4E7",
  gradients: {
    newGradient: "linear-gradient(53.53deg, #A16552 15.88%, #E1B242 92.56%)",
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
  primaryButtonDisable: "rgba(66, 66, 66, 0.5)",
  secondaryButtonDisableBg: "#F1EADA",
  secondaryButtonDisableColor: "rgba(66, 66, 66, 0.5)",
  text: "#4D4040",
  white2: "#F9F4E7",
  white3: "#F1EADA",
  white4: "#EADFC7",
  tertiary: "#EFF4F5",
  input: "#4D4040",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#0B0B0B",
  backgroundDisabled: "#3c3742",
  dividerColor: "#333333",
  navbar: "#212121",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  primaryButtonDisable: "rgba(241, 234, 218, 0.5)",
  secondaryButtonDisableBg: "rgba(33, 33, 33, 0.5)",
  secondaryButtonDisableColor: "#F1EADA",
  text: "#FAFAFA",
  white2: "#212121",
  white3: "#383838",
  white4: "#424242",
  tertiary: "#383838",
  input: "#FAFAFA",
};
