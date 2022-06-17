import React from "react";
import { Input as ThemeUIInput, Box } from "theme-ui";
import { InputProps, sizes, iconSizes } from "./types";
import { Svg } from "../Svg";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = sizes.MD, icon, width = "200px", ...props }, ref) => {
    return (
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <ThemeUIInput
          {...props}
          ref={ref}
          sx={{
            pl: "15px",
            pr: icon ? "40px" : "15px",
            variant: `forms.input.${size}`,
            color: "text",
            outline: "none",
            width,
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
            <Svg icon={icon} width={iconSizes[size]} />
          </Box>
        )}
      </Box>
    );
  }
);

export default Input;
