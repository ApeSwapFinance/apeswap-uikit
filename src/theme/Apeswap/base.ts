export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
};

const baseTheme = {
  initialColorModeName: "light",
  breakpoints: [
    `${breakpointMap.xs}px`,
    `${breakpointMap.sm}px`,
    `${breakpointMap.md}px`,
    `${breakpointMap.lg}px`,
    `${breakpointMap.xl}px`,
  ],
  space: [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64],
  borderWidths: [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64],
  fontWeights: {
    light: 300,
    normal: 500,
    bold: 700,
  },
  fonts: {
    titan: "Titan One",
    poppins: "Poppins",
  },
  radii: {
    small: "4px",
    default: "16px",
    normal: "10px",
    card: "32px",
    circle: "50%",
  },
  zIndices: { dropdown: 10, modal: 100 },
};

export default baseTheme;
