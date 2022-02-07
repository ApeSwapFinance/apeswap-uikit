import React from "react";
import { Box } from "theme-ui";
import { TabsProps, variants } from "./types";
import styles from "./styles";

const Tabs: React.FC<TabsProps> = ({ children, variant = variants.CENTERED }) => {
  return (
    <Box
      sx={{
        ...styles.tabs,
        justifyContent: variant === variants.CENTERED ? "center" : null,
      }}
    >
      <Box
        sx={{
          ...styles.tabUnderlay,
          width: variant === variants.FULLWIDTH ? "100%" : undefined,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Tabs;
