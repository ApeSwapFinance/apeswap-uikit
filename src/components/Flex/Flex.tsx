import React from "react";
import { Flex as ThemeUIFlex } from "theme-ui";

const Flex: React.FC<any> = ({ children, ...props }) => {
  return <ThemeUIFlex {...props}>{children}</ThemeUIFlex>;
};

export default Flex;
