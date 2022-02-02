import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { sizes, variants, variantProps } from "../Button/types";
import { ButtonMenuProps, ButtonMenuItemProps } from "./types";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  size = sizes.MEDIUM,
  variant = variants.PRIMARY,
  onClick,
  children,
}) => {
  return (
    <StyledButtonMenu variant={variant}>
      {Children.map(children, (child: ReactElement<ButtonMenuItemProps>, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onClick ? () => onClick(index) : undefined,
          size,
          variant: variant as variantProps,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
