import React from "react";
import { Flex } from "theme-ui";
import style from "./styles";

const TooltipFlex: React.FC = ({ children }) => {
  return <Flex sx={style.flex}>{children}</Flex>;
};

export default TooltipFlex;
