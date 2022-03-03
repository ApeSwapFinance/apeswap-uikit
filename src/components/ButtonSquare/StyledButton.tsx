import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import getFontFamily from "../../util/getFontFamily";
import { ButtonSquareProps, ButtonSquareThemeVariant, variants } from "./types";

type ThemedProps = {
  theme: DefaultTheme;
} & ButtonSquareProps;

const getDisabledStyles = ({ isLoading, theme }: ThemedProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.white3};
      border-color: ${variants.PRIMARY ? "transparent" : theme.colors.background};
      box-shadow: none;
      color: ${variants.PRIMARY ? theme.colors.primaryButtonDisable : theme.colors.secondaryButtonDisableColor};
      cursor: not-allowed;
    }
  `;
};

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== "button") {
    return `
      pointer-events: none;
    `;
  }

  return "";
};

const getButtonVariantProp =
  (prop: keyof ButtonSquareThemeVariant) =>
  ({ theme, variant = variants.PRIMARY }: ThemedProps) => {
    return theme.button[variant][prop];
  };

const StyledButtonSquare = styled.button<ButtonSquareProps>`
  align-items: center;
  background-color: ${({ bgColor }) => (!bgColor ? getButtonVariantProp("background") : bgColor)};
  border-radius: 10px;
  border: ${getButtonVariantProp("border")};
  box-shadow: none;
  color: ${({ color }) => (!color ? getButtonVariantProp("color") : color)};
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-weight: ${({ fontWeight = 600 }) => fontWeight};
  font-family: ${({ fontFamily, theme }) => fontFamily && getFontFamily(fontFamily, theme)};
  /* max-content instead of auto for Safari fix */
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  height: ${({ size }) => (size === "sm" ? "36px" : "36px")};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === "sm" ? "0 16px" : "0 24px")};
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  text-transform: uppercase;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: ${getButtonVariantProp("backgroundHover")};
    border-color: ${getButtonVariantProp("borderColorHover")};
    color: ${({ theme, variant }) => (variant === "secondary" ? theme.colors.yellow : getButtonVariantProp("color"))};
  }

  &:focus:not(:active) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.text};
  }

  &:active {
    background-color: ${getButtonVariantProp("backgroundActive")};
    box-shadow: ${getButtonVariantProp("boxShadowActive")};
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`;

StyledButtonSquare.defaultProps = {
  fullWidth: false,
  type: "button",
};

export default StyledButtonSquare;
