import React from "react";
import { ButtonProps } from "../Button";
import Button from "../Button/Button";

const MenuButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button sx={{ padding: "0px 8px", borderRadius: "8px" }} color="text" {...props}>
      {children}
    </Button>
  );
};

MenuButton.defaultProps = {
  color: "text",
  size: "sm",
};

export default MenuButton;
