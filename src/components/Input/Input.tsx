/** @jsxImportSource theme-ui */
import React from "react";
import { Input as ThemeUIInput, Box, Flex } from "theme-ui";
import { InputProps, sizes, iconSizes } from "./types";
import { Svg } from "../Svg";

const Input: React.FC<InputProps> = ({ size = sizes.MD, icon, width, ...props }) => {
  return (
    <Flex sx={{ width }}>
      <ThemeUIInput
        {...props}
        sx={{
          width,
          pl: "15px",
          pr: icon ? "40px" : width === "100%" ? 0 : "15px",
          variant: `forms.input.${size}`,
          color: "text",
          outline: "none",
        }}
      />
      {icon && (
        <Box
          sx={{
            transform: "translateX(-25px)",
            display: "flex",
          }}
        >
          <Svg icon={icon} width={iconSizes[size]} />
        </Box>
      )}
    </Flex>
  );
};

export default Input;
