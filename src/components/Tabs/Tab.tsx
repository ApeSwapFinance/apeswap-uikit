/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { Text } from "../Text";
import { sizes, TabProps, variants, tabPadding, fontSizes } from "./types";
import styles from "./styles";

const Tab: React.FC<TabProps> = React.forwardRef(
  ({ onClick, index, label, size = sizes.MEDIUM, variant = variants.CENTERED, ...props }, ref) => {
    return (
      <Box
        ref={ref as any}
        {...props}
        sx={{
          ...styles.tab,
          flex: variant === variants.FULLWIDTH ? 1 : undefined,
          px: tabPadding[size].x,
          py: tabPadding[size].y,
          cursor: props?.disabled ? "not-allowed" : "pointer",
        }}
        onClick={() => props?.disabled || onClick(index)}
      >
        <Text sx={{ fontSize: fontSizes[size] }} weight="bold">
          {label}
        </Text>
      </Box>
    );
  }
);

export default Tab;
