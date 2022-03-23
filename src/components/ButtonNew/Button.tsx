import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { ButtonProps, variants, buttonFontSizes, buttonPadding, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = variants.PRIMARY,
  sx,
  csx,
  size = sizes.MEDIUM,
  children,
  ...props
}) => {
  let hoverStyle = {
    "&:hover": {
      "&:not([disabled])": { borderColor: "#FFDA00", background: variant === "primary" && "#FFDA00" },
      "&:disabled": {},
    },
  };
  if (variant === "secondary") {
    hoverStyle = {
      "&:hover": {
        "&:not([disabled])": hoverStyle["&:hover"]["&:not([disabled])"],
        "&:disabled": { color: "#AFADAA", borderColor: "#AFADAA" },
      },
    };
  }
  return (
    <ThemeUIButton
      {...props}
      sx={{
        variant: `buttons.${variant}`,
        fontSize: buttonFontSizes[size],
        px: buttonPadding[size].x,
        py: buttonPadding[size].y,
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .3s linear",
        ...hoverStyle,
        "&:active": {
          transform: "scale(0.9)",
        },
        ...sx,
        ...csx,
      }}
    >
      {children}
    </ThemeUIButton>
  );
};

export default Button;
