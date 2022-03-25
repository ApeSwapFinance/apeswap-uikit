export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  yellow: string;
  inset: string;
};

export type Gradients = {
  bubblegum?: string;
  newGradient?: string;
};

export type Colors = {
  primaryBright: string;
  primaryDark: string;
  success: string;
  brown: string;
  error: string; // replaces failure
  yellow: string;
  black?: string;
  dividerColor: string;
  navbar: string;
  primaryButtonDisable: string;
  secondaryButtonDisableBg: string;
  secondaryButtonDisableColor: string;
  background: string;
  backgroundDisabled: string;
  white2: string;
  white3: string;
  white4: string;
  text: string;
  primary: string;
  gray: string;
  inputBorder: string;
  tertiary: string;
  primaryGray: string;
  yellowHover: string;
  // secondary: string;
  // warning: string;
  // contrast: string;
  // invertedContrast: string;
  input: string;
  // textDisabled: string;
  // textSubtle: string;
  // borderColor: string;
  // card: string;
  // white: string;
  // green: string;

  // Gradients
  gradients?: Gradients;

  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};

export type FontFamily = {
  poppins: string;
};
