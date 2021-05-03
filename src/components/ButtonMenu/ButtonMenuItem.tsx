import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorKey: "primary" | "textSubtle";
} & ButtonMenuItemProps;

const InactiveButton = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};  
  font-family: ${(fontFamily) => fontFamily !== "undefined" ? fontFamily : "inherit"};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isActive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  fontFamily,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        size={size}
        variant="tertiary"
        colorKey={variant === variants.PRIMARY || variants.YELLOW ? "primary" : "textSubtle"}
        fontFamily={fontFamily}
        {...props}
      />
    );
  }

  return <Button as={as} size={size} variant={variant} fontFamily={fontFamily} {...props} />;
};

export default ButtonMenuItem;
