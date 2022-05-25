/** @jsxImportSource theme-ui */
import React from "react";

const Table: React.FC = ({ children, ...props }) => {
  return (
    <table
      {...props}
      sx={{
        width: "100%",
      }}
    >
      {children}
    </table>
  );
};

export default Table;
