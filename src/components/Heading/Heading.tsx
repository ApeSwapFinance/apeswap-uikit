import React from "react";
import { Heading as ThemeUIHeading } from "theme-ui";
import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = ({ children, as = "h3", banner }) => {
  return (
    <ThemeUIHeading as={as} sx={{ variant: `styles.${banner ? "banner" : as || "h1"}` }}>
      {children}
    </ThemeUIHeading>
  );
};

export default Heading;
