/** @jsxImportSource theme-ui */
import React from "react";
import { TableRowProps } from "./types";

const TableRow: React.FC<TableRowProps> = ({ children, textAlign = "center" }) => {
  return (
    <tr
      sx={{
        textAlign,
      }}
    >
      {children}
    </tr>
  );
};

export default TableRow;
