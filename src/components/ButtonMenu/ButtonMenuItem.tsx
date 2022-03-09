import React from "react";
import styled from "styled-components";
import getFontFamily from "../../util/getFontFamily";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorKey: "primary" | "gray";
  fontFamily?: string;
  fontSize?: string;
  isMobile?: boolean;
} & ButtonMenuItemProps;

const InactiveButton = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme }) => (theme.isDark ? "rgba(122, 122, 122, 1)" : theme.colors.primaryButtonDisable)};

  &:hover:not(:disabled):not(:active) {
    background-color: transparent !important;
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
  isMobile,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        size={size}
        variant="tertiary"
        colorKey={variant === variants.PRIMARY || variants.YELLOW ? "primary" : "gray"}
        fontFamily={fontFamily}
        fontSize={fontSize}
        isMobile={isMobile}
        {...props}
      />
    );
  }

  return (
    <Button
      as={as}
      size={size}
      variant={variant}
      isMobile={isMobile}
      fontFamily={fontFamily}
      fontSize={fontSize}
      {...props}
    />
  );
};

export default ButtonMenuItem;
