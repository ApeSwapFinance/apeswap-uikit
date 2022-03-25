import React from "react";
import { Input as ThemeUIInput, Box } from "theme-ui";
import { InputProps, sizes, iconSizes } from "./types";
import { Svg } from "../Svg";

const Input: React.FC<InputProps> = ({ size = sizes.MD, icon, width, isWarning, sx, ...props }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <ThemeUIInput
        {...props}
        sx={{
          width,
          pl: "15px",
          pr: icon ? "40px" : "15px",
          variant: `forms.input.${size}`,
          color: "text",
          outline: "none",
          ...sx,
        }}
      />
      {icon && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "15px",
          }}
        >
          {isWarning ? <Svg icon="error" width={iconSizes[size]} /> : <Svg icon={icon} width={iconSizes[size]} />}
        </Box>
      )}
    </Box>
  );
};

export default Input;
