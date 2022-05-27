import React from "react";
import { Box } from "theme-ui";
import { TabPanelProps } from "./types";

const TabPanel: React.FC<TabPanelProps> = ({ children, index, activeTab, ...props }) => {
  return activeTab === index ? (
    <Box {...props} sx={{ pt: 8 }}>
      {children}
    </Box>
  ) : null;
};

export default TabPanel;
