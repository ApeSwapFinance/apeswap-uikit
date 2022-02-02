import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import { DropdownProps, dropdownPadding, fontSizes, sizes } from "./types";
import { IconSVG } from "../IconSVG";

const Dropdown: React.FC<DropdownProps> = ({ component, children, size = sizes.MEDIUM }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <Box
      sx={{
        background: "lvl1",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Flex
        sx={{
          px: dropdownPadding[size].x,
          py: dropdownPadding[size].y,
          justifyContent: "space-between",
          alignItems: "center",
          span: {
            fontSize: fontSizes[size],
          },
        }}
      >
        {component}
        <IconSVG icon="caret" direction={open ? "up" : "down"} />
      </Flex>
      {open && <ul>{children}</ul>}
    </Box>
  );
};

export default Dropdown;
