import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import Icon from "../Svg/_Icons/AutoRenew";
import { ButtonProps, variants, buttonFontSizes, buttonPadding, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = variants.PRIMARY,
  sx,
  csx,
  size = sizes.MEDIUM,
  load,
  children,
  startIcon,
  endIcon,
  fullWidth,
  ...props
}) => {
  return (
    <ThemeUIButton
      {...props}
      sx={{
        variant: `buttons.${variant}`,
        textTransform: "uppercase",
        fontSize: buttonFontSizes[size],
        px: buttonPadding[size].x,
        py: buttonPadding[size].y,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .3s linear",
        "&:active": {
          transform: "scale(0.9)",
        },
        width: fullWidth ? "100%" : "max-content",
        ...sx,
        ...csx,
      }}
    >
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children} {load && <Icon color="currentColor" ml="5px" spin />}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </ThemeUIButton>
  );
};

export default Button;
