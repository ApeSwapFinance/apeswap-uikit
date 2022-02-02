// TODO: to implement

import React from "react";

const IconButton: React.FC<any> = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
);

export default IconButton;
