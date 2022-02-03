import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TEXT, DANGER, SUCCESS, YELLOW } = variants;

// buttons: {
//   primary: {
//     &:disabled: {
//       background: 'white3',
//       border: 'primaryBtnDisable',
//       color: 'primaryButtonDisable',
//       cursor: 'not-allowed',
//     },
//     background: 'yellow',
//     border: 'primaryButton',
//     borderRadius: 'normal',
//     color: 'primaryBright',
//     cursor: 'pointer',
//     fontSize: 2,
//     fontWeight: 'bold',
//     padding: '10px 20px 10px 19px',
//   },
//   secondary: {
//     &:disabled: {
//       background: 'white3',
//       border: 'secondaryButtonDisable',
//       color: 'secondaryButtonDisableColor',
//       cursor: 'not-allowed',
//     },
//     background: 'white2',
//     border: 'secondaryButton',
//     borderRadius: 'normal',
//     color: 'yellow',
//     cursor: 'pointer',
//     fontSize: 2,
//     fontWeight: 'bold',
//     padding: '10px 20px 10px 19px',
//   },
// },

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.yellow,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.yellow,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  [SECONDARY]: {
    background: lightColors.white2,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.white2,
    border: `2px solid ${lightColors.yellow}`,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.yellow,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.text,
  },
  [DANGER]: {
    background: lightColors.error,
    backgroundActive: lightColors.error,
    backgroundHover: lightColors.error,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  [YELLOW]: {
    background: lightColors.yellow,
    backgroundActive: lightColors.yellow,
    backgroundHover: lightColors.yellow,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primaryBright,
  },
  // [TERTIARY]: {
  //   background: lightColors.tertiary,
  //   backgroundActive: lightColors.tertiary,
  //   backgroundHover: lightColors.tertiary,
  //   border: 0,
  //   borderColorHover: "currentColor",
  //   boxShadow: "none",
  //   boxShadowActive: "none",
  //   color: lightColors.primary,
  // },
  // [SUBTLE]: {
  //   background: lightColors.textSubtle,
  //   backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
  //   backgroundHover: `${lightColors.textSubtle}B3`, // 85% opacity
  //   border: 0,
  //   borderColorHover: "currentColor",
  //   boxShadow: "none",
  //   boxShadowActive: "none",
  //   color: "#FFFFFF",
  // },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
    background: darkColors.white2,
    backgroundHover: darkColors.white2,
  },
  [TEXT]: {
    ...light.text,
    color: darkColors.text,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [YELLOW]: {
    ...light.yellow,
  },
  // [TERTIARY]: {
  //   ...light.tertiary,
  //   background: darkColors.tertiary,
  //   backgroundActive: darkColors.tertiary,
  //   backgroundHover: darkColors.tertiary,
  //   color: darkColors.primary,
  // },
  // [SUBTLE]: {
  //   ...light.subtle,
  // },
};
