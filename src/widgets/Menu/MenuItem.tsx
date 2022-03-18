import React, { useContext } from "react";
import { Box } from "theme-ui";
import MenuContext from "./MenuContext";

const MenuItem: React.FC = ({ children }) => {
  const { setCollapse } = useContext(MenuContext);

  const handleClick = () => {
    setCollapse(false);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
        "& a": {
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default MenuItem;
