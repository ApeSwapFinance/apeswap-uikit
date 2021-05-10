import React from "react";
import styled from "styled-components";
import getFontFamily from "../../util/getFontFamily";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorKey: "primary" | "textSubtle";
  fontFamily?: string;
  fontSize?: string;
} & ButtonMenuItemProps;

const InactiveButton = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
  font-family: ${({ fontFamily, theme }) => fontFamily && getFontFamily(fontFamily, theme)};
  font-size: ${({ fontSize }) => fontSize || "16px"};
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isActive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  fontFamily,
  fontSize,
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
        fontSize={fontSize}
        {...props}
      />
    );
  }

  return <Button as={as} size={size} variant={variant} fontFamily={fontFamily} fontSize={fontSize} {...props} />;
};

export default ButtonMenuItem;
