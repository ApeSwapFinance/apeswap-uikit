import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonSquareProps, variants, sizes } from "./types";
import { Button } from "../ButtonNew";

// Uses ButtonNew instead of old StyledButton
// Does not pass ...props to ButtonNew
// When ...props is passed down to ButtonNew (ButtonNewProps doesn't match)

const ButtonSquare: React.FC<ButtonSquareProps> = ({
  startIcon,
  endIcon,
  children,
  external,
  isLoading,
  disabled,
  fontFamily,
  color,
  fullWidth,
  size,
  ...props
}) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  return (
    <Button
      {...props}
      isLoading={isLoading}
      disabled={isDisabled}
      fontFamily={fontFamily}
      color={color}
      sx={{
        border: "none",
        borderRadius: "5px",
        width: fullWidth && "100%",
      }}
    >
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </Button>
  );
};

ButtonSquare.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};

export default ButtonSquare;
