/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownProps, dropdownPadding, fontSizes, sizes } from "./types";
import { Svg } from "../Svg";

const Dropdown: React.FC<DropdownProps> = ({ component, children, size = sizes.MEDIUM }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <Box
      sx={{
        background: "lvl1",
        borderRadius: "10px",
        cursor: "pointer",
        position: "relative",
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
        <Svg icon="caret" direction={open ? "up" : "down"} />
      </Flex>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: "10px" }}
            animate={{ height: "fit-content" }}
            exit={{ height: "0px" }}
            sx={{
              position: "absolute",
              background: "lvl1",
              width: "100%",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
              overflow: "hidden",
              paddingTop: "5px",
              top: "85%",
            }}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Dropdown;
