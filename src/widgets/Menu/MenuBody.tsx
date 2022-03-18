import React from "react";
import { Flex } from "theme-ui";
import styles from "./styles";

const MenuBody: React.FC = ({ children }) => {
  return <Flex sx={styles.menuBody}>{children}</Flex>;
};

export default MenuBody;
