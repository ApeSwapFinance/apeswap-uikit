import React from "react";
import { Text as ThemeUIText } from "theme-ui";
import { TextProps, variants } from "./types";

const Text: React.FC<TextProps> = ({
  variant = variants.NORMAL,
  weight = variants.NORMAL,
  size,
  children,
  color,
  sx,
  ...props
}) => {
  return (
    <ThemeUIText {...props} sx={{ ...sx, variant: `text.${variant}`, color, fontWeight: weight, fontSize: size }}>
      {children}
    </ThemeUIText>
  );
};

export default Text;
