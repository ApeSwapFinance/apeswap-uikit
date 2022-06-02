/** @jsxImportSource theme-ui */
import React from "react";
import Button from "../../components/Button/Button";

interface MenuButtonProps {
  handleClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ handleClick, ...props }) => {
  return (
    <Button
      color="text"
      sx={{
        padding: "0px",
        marginLeft: "20px",
        borderRadius: "8px",
        marginTop: "3.5px",
        border: "none",
        paddingLeft: "0px",
        paddingRight: "0px",
        "&&": {
          background: "none",
        },
        "&:focus": {
          boxShadow: "none",
        },
        "&:hover": {
          "&&": {
            background: "none",
          },
        },
      }}
      onClick={handleClick}
      {...props}
    />
  );
};

export default MenuButton;
