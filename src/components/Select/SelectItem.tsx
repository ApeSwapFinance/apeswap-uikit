/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { SelectItemProps, selectItemPadding, sizes } from "./types";
import { dynamicStyles } from "./styles";

const SelectItem: React.FC<SelectItemProps> = ({ onClick, value, active, size = sizes.MEDIUM, children, ...props }) => {
  const style = dynamicStyles.dropdownItem({ size });

  return (
    <Box
      as="li"
      {...props}
      onClick={() => onClick?.(value)}
      sx={{
        padding: selectItemPadding[size],
        listStyleType: "none",
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: !active ? "lvl2" : undefined,
        },
      }}
    >
      <Box sx={style}>{children}</Box>
    </Box>
  );
};

export default SelectItem;
