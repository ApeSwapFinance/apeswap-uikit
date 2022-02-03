import React from "react";
import { Text as ThemeUIText } from "theme-ui";
import { TextProps, weights, variants } from "./types";

const Text: React.FC<TextProps> = ({
  variant = variants.NORMAL,
  weight = weights.NORMAL,
  children,
  color,
  sx,
  ...props
}) => {
  return (
    <ThemeUIText {...props} sx={{ ...sx, variant: `text.${variant}`, color, fontWeight: weight }}>
      {children}
    </ThemeUIText>
  );
};

export default Text;
