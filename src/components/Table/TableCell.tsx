/** @jsxImportSource theme-ui */
import React from "react";

const TableCell: React.FC = ({ children }) => {
  return (
    <td
      sx={{
        px: 4,
        py: 2,
      }}
    >
      {children}
    </td>
  );
};

export default TableCell;
