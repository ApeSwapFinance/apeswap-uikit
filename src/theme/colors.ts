import { Colors } from "./types";

// white1, background,
// white2, navbar,
// white3, lvl1,
// white4, lvl2,
// contrast: "#965a50ff",
// invertedContrast: "#FFFFFF",

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

// export const baseColors = {
//   failure: "#ED4B9E",
//   primary: "#af6e5aff",
//   primaryBright: "#ffd54fff",
//   primaryDark: "#0098A1",
//   secondary: "#965a50ff",
//   success: "#31D0AA",
//   warning: "#FFB237",
//   green: "#009859ff",
//   yellow: "#FFB300",
// };

// export const lightColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   background: "#FAF9FA",
//   backgroundDisabled: "#E9EAEB",
//   contrast: "#965a50ff",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   tertiary: "#EFF4F5",
//   text: "#af6e5aff;",
//   textDisabled: "#BDC2C4",
//   textSubtle: "#009859ff",
//   borderColor: "#965a50ff",
//   card: "#FFFFFF",
//   yellow: "#FFB300",
//   white: "#FFFFFF",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
//   },
// };

// export const darkColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   secondary: "#009859ff",
//   background: "#100C18",
//   backgroundDisabled: "#3c3742",
//   contrast: "#FFFFFF",
//   invertedContrast: "#191326",
//   input: "#483f5a",
//   primaryDark: "#0098A1",
//   tertiary: "#353547",
//   text: "#FFFFFF",
//   textDisabled: "#666171",
//   textSubtle: "#FFFFFF",
//   borderColor: "#524B63",
//   card: "#27262c",
//   yellow: "#FFB300",
//   white: "#FFFFFF",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
//   },
// };
