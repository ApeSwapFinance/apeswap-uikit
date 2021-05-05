import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonSquareProps, variants, sizes } from "./types";

const ButtonSquare: React.FC<ButtonSquareProps> = ({
  startIcon,
  endIcon,
  children,
  external,
  isLoading,
  disabled,
  ...props
}) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledButton>
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
