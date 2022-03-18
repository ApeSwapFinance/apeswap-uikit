import React, { useContext } from "react";
import { Flex } from "theme-ui";
import MenuContext from "./MenuContext";
import styles from "./styles";

const Menu: React.FC = ({ children }) => {
  const { collapse } = useContext(MenuContext);

  return (
    <Flex
      sx={{
        ...styles.menu,
        width: collapse ? [0, 0, "56px"] : "240px",
      }}
    >
      {children}
    </Flex>
  );
};

export default Menu;
