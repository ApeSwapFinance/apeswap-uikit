import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import Icon from "../Svg/_Icons/AutoRenew";
import { ButtonProps, variants, buttonFontSizes, buttonPadding, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = variants.PRIMARY,
  size = sizes.MEDIUM,
  load,
  children,
  startIcon,
  endIcon,
  fullWidth,
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
        "&:disabled": { color: "secondaryButtonDisableColor", borderColor: "secondaryButtonDisable" },
      },
    };
  }
  if (variant === "tertiary") {
    hoverStyle = {
      "&:hover": {
        "&:not([disabled])": {
          borderColor: "primaryBtnDisable",
          background: "white4",
        },
        "&:disabled": {},
      },
    };
  }
  if (variant === "success") {
    hoverStyle = {
      "&:hover": {
        "&:not([disabled])": {
          borderColor: "hoveredSuccess",
          background: "hoveredSuccess",
        },
        "&:disabled": {},
      },
    };
  }
  if (variant === "danger") {
    hoverStyle = {
      "&:hover": {
        "&:not([disabled])": {
          borderColor: "hoveredDanger",
          background: "hoveredDanger",
        },
        "&:disabled": {},
      },
    };
  }

  return (
    <ThemeUIButton
      {...props}
      variant={variant}
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
        ...hoverStyle,
        width: fullWidth ? "100%" : "max-content",
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
