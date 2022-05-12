import React from "react";
import { Box } from "theme-ui";
import styles from "./styles";

const MenuFooter: React.FC = ({ children }) => {
  return <Box sx={styles.footer}>{children}</Box>;
};

export default MenuFooter;
