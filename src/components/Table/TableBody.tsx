/** @jsxImportSource theme-ui */
import React from "react";
import { TableBodyProps } from "./types";

const TableBody: React.FC<TableBodyProps> = ({ children, borderRadius }) => {
  return (
    <tbody
      sx={{
        tr: {
          "&:nth-child(odd) td": {
            background: "white4",
          },
          "&:nth-child(even) td": {
            background: "white3",
          },
          "&:first-of-type": {
            "td:first-of-type": {
              borderTopLeftRadius: borderRadius,
            },
            "td:last-of-type": {
              borderTopRightRadius: borderRadius,
            },
          },
          "&:last-of-type": {
            "td:first-of-type": {
              borderBottomLeftRadius: borderRadius,
            },
            "td:last-of-type": {
              borderBottomRightRadius: borderRadius,
            },
          },
        },
      }}
    >
      {children}
    </tbody>
  );
};

export default TableBody;
