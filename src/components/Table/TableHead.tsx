/** @jsxImportSource theme-ui */
import React from "react";
import { TableHeadProps } from "./types";

const TableHead: React.FC<TableHeadProps> = ({ children, width }) => {
  return (
    <th
      sx={{
        px: 4,
        py: 2,
        width,
      }}
    >
      {children}
    </th>
  );
};

export default TableHead;
