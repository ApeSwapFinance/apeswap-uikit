import React from "react";
import styled, { DefaultTheme } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import getThemeValue from "../../util/getThemeValue";
import getFontFamily from "../../util/getThemeValue";
import Text from "../Text/Text";
import { LinkProps } from "./types";

interface ThemedProps extends LinkProps {
  theme: DefaultTheme;
}

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  font-family: ${({ fontFamily, theme }) => fontFamily && getFontFamily(fontFamily, theme)};
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
