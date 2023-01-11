import styled, { DefaultTheme } from "styled-components";
import getColor from "../../util/getColor";
import { ListTagProps, TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getThemeTextColor = ({ outline, variant = "primary", theme }: ThemedProps) =>
  outline ? getColor(variant, theme) : "#ffffff";

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  background-color: ${({ outline, theme, variant = "primary" }) =>
    outline ? "transparent" : getColor(variant, theme)};
  border: 2px solid ${({ variant = "primary", theme }) => getColor(variant, theme)};
  border-radius: 16px;
  color: ${getThemeTextColor};
  display: inline-flex;
  font-size: 14px;
  font-weight: 300;
  height: 28px;
  line-height: 1.5;
  padding: 0 8px;
  white-space: nowrap;

  svg {
    fill: ${getThemeTextColor};
  }
`;

interface CustomProps extends ListTagProps {
  theme: DefaultTheme;
}

export const StyledListTag = styled.div<CustomProps>`
  align-items: center;
  background: ${({ theme, variant = "ape" }) => theme?.colors?.listTagBg?.[variant]};
  border-radius: 16px;
  display: inline-flex;
  height: 15px;
  padding: 0 5px;
`;

export const StyledTagText = styled.div<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme?.colors?.primaryBright};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  line-height: 15px;
`;
