/** @jsxImportSource theme-ui */
import React from "react";

const List: React.FC = ({ children }) => {
  return (
    <li
      sx={{
        px: 4,
        py: 2,
        "&:not(:last-child)": {
          marginBottom: 9,
        },
      }}
    >
      {children}
    </li>
  );
};

export default List;
