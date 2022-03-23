/** @jsxImportSource theme-ui */
import React from "react";
import { Box, NavLink } from "theme-ui";
import { DropdownItemProps, dropdownItemPadding, sizes } from "./types";
import { dynamicStyles } from "./styles";

const Element: React.FC<DropdownItemProps> = ({ onClick, url, active, size, children }) => {
  const style = dynamicStyles.dropdownItem({ active, size });
  return url ? (
    <NavLink href={url} onClick={onClick} sx={style}>
      {children}
    </NavLink>
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
        color: "text",
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
