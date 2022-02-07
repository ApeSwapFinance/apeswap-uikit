/** @jsxImportSource theme-ui */
import React from "react";

const List: React.FC = ({ children }) => {
  return (
    <ul
      sx={{
        listStyleType: "none",
        "li:nth-type(odd)": {
          background: "white4",
        },
        "li:nth-of-type(even)": {
          background: "white3",
        },
      }}
    >
      {children}
    </ul>
  );
};

export default List;
