/** @jsxImportSource theme-ui */
import React from "react";

const Table: React.FC = ({ children }) => {
  return (
    <table
      sx={{
        width: "100%",
      }}
    >
      {children}
    </table>
  );
};

export default Table;
