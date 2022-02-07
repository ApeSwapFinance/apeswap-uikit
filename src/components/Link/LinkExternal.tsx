/* eslint-disable react/require-default-props */
import React from "react";
import { Box, LinkProps, Link, ThemeUICSSObject } from "theme-ui";
import { IconSVG } from "../IconSVG";

interface Props extends LinkProps {
  display?: ThemeUICSSObject["display"];
  textAlign?: ThemeUICSSObject["textAlign"];
}

const LinkExternal: React.FC<Props> = ({ display, textAlign, children, ...props }) => {
  return (
    <Link
      sx={{
        color: "brown",
        display,
        textAlign,
      }}
      {...props}
      target="_blank"
    >
      {children}
      <Box as="span" sx={{ marginLeft: 2, verticalAlign: "middle" }}>
        <IconSVG icon="external" color="brown" />
      </Box>
    </Link>
  );
};

export default LinkExternal;
