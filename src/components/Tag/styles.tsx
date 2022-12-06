import styled, { DefaultTheme } from "styled-components";
import getColor from "../../util/getColor";
import { LpTypeVariants, TagProps } from "./types";

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

export const StyledLpTag = styled.div<{ variant: LpTypeVariants }>`
  align-items: center;
  background: ${({ theme, variant }) => theme?.colors?.lpTagBg[variant]};
  border-radius: 6px;
  display: inline-flex;
  height: 15px;
  padding: 0 5px;
`;

export const LightText = styled.div<{ variant: LpTypeVariants }>`
  background: ${({ theme, variant }) => theme?.colors?.lpTagText[variant]};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
`;

export const DarkText = styled.div<{ variant: LpTypeVariants }>`
  color: ${({ theme, variant }) => theme?.colors?.lpTagText[variant]};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
`;
