/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { Link } from "react-router-dom";
import { DropdownItemProps, dropdownItemPadding, sizes } from "./types";
import { dynamicStyles } from "./styles";

const Element: React.FC<DropdownItemProps> = ({ onClick, url, active, size, children }) => {
  const style = dynamicStyles.dropdownItem({ active, size });
  return url ? (
    <Link to={url} onClick={onClick} sx={style}>
      {children}
    </Link>
  ) : (
    <Box onClick={onClick} sx={style}>
      {children}
    </Box>
  );
};

const DropdownItem: React.FC<DropdownItemProps> = ({ onClick, url, active, size = sizes.MEDIUM, children }) => {
  return (
    <Box
      as="li"
      sx={{
        px: dropdownItemPadding[size].x,
        py: dropdownItemPadding[size].y,
        listStyleType: active ? "disc" : "none",
        cursor: "pointer",
        color: "brown",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "lvl2",
        },
      }}
    >
      <Element url={url} onClick={onClick} active={active} size={size}>
        {children}
      </Element>
    </Box>
  );
};

export default DropdownItem;
