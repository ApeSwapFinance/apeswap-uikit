import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import getFontFamily from "../../util/getFontFamily";
import getColor from "../../util/getColor";
import { ButtonProps, ButtonThemeVariant, variants } from "./types";

type ThemedProps = {
  theme: DefaultTheme;
} & ButtonProps;

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
  (prop: keyof ButtonThemeVariant) =>
  ({ theme, variant = variants.PRIMARY }: ThemedProps) => {
    return theme.button[variant][prop];
  };

const getButtonHeight = (size: string | undefined) => {
  if (size === "sm") {
    return "28px";
  }
  if (size === "mds") {
    return "36px";
  }
  if (size === "md") {
    return "44px";
  }
  return "44px";
};

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${getButtonVariantProp("background")};
  border: ${getButtonVariantProp("border")};
  color: ${({ color, theme }) => (color ? getColor(color, theme) : getButtonVariantProp("color"))};
  border-radius: 10px;
  font-weight: ${({ fontWeight = 600 }) => fontWeight};
  box-shadow: ${getButtonVariantProp("boxShadow")};
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ fontFamily, theme }) => fontFamily && getFontFamily(fontFamily, theme)};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  /* max-content instead of auto for Safari fix */
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  height: ${({ size }) => getButtonHeight(size)};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ isMobile }) => (isMobile ? "0 10px" : "0 24px")};
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  text-transform: uppercase;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: ${getButtonVariantProp("backgroundHover")};
    border-color: ${getButtonVariantProp("borderColorHover")};
    color: ${({ theme, variant }) => (variant === "secondary" ? theme.colors.yellow : getButtonVariantProp("color"))};
  }

  &:active {
    transform: scale(0.9);
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`;

StyledButton.defaultProps = {
  fullWidth: false,
  type: "button",
};

export default StyledButton;
