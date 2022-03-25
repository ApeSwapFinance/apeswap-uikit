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
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.backgroundDisabled};
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

const StyledButtonSquare = styled.button<ButtonSquareProps>`
  align-items: center;
  background-color: #ffb300;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-weight: 700;
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
  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: inherit;
  }
  &:focus:not(:active) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.text};
  }
  &:active {
    box-shadow: inherit;
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
