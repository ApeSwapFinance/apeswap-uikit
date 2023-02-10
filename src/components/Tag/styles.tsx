/** @jsxImportSource theme-ui */
import styled, { DefaultTheme } from "styled-components";
import { ThemeUIStyleObject } from "theme-ui";
import getColor from "../../util/getColor";
import { TagProps } from "./types";

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

export const styles: Record<"listTagCont" | "tagText", (props: { variant?: any }) => ThemeUIStyleObject> = {
  listTagCont: ({ variant = "ape" }) => ({
    alignItems: "center",
    background: (theme) => theme?.colors?.listTagBg?.[variant],
    borderRadius: "16px",
    display: "inline-flex",
    height: "15px",
    padding: "0 5px",
  }),
  tagText: () => ({
    color: (theme) => theme?.colors?.primaryBright,
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: 600,
    lineHeight: "15px",
  }),
};
