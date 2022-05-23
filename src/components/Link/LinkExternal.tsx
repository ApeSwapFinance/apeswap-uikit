/* eslint-disable react/require-default-props */
import React from "react";
import { Box, Link } from "theme-ui";
import { Svg } from "../Svg";
import { LinkExternalProps } from "./types";

const LinkExternal: React.FC<LinkExternalProps> = ({ display, textAlign, children, ...props }) => {
  return (
    <Link
      sx={{
        color: "text",
        display,
        textAlign,
        cursor: "pointer",
        alignItems: "center",
      }}
      {...props}
      target="_blank"
    >
      {children}
      <Box as="span" sx={{ marginLeft: 2, verticalAlign: "middle" }}>
        <Svg icon="external" color="text" width={16} />
      </Box>
    </Link>
  );
};

export default LinkExternal;
