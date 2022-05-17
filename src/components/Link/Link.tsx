import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
import { LinkProps } from "./types";
import LinkExternal from "./LinkExternal";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps> = ({ external, children, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  if (external) {
    return (
      <LinkExternal {...internalProps} {...props}>
        {children}
      </LinkExternal>
    );
  }
  return (
    <StyledLink as="a" bold {...internalProps} {...props}>
      {children}
    </StyledLink>
  );
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
