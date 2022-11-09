import React from "react";
import { Flex } from "../Flex";
import { Svg } from "../Svg";
import { FloatingDocsProps } from "./types";

export const FloatingDocs: React.FC<FloatingDocsProps> = ({ link, iconProps, ...props }) => {

  if (link) return (
    <Flex
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "40px",
        height: "40px",
        zIndex: 10,
        cursor: "pointer",
      }}
      onClick={() => window.open(link, "_blank")}
      {...props}
    >
      <Svg icon="docs" color="primaryBright" {...iconProps} />
    </Flex>
  );
  return null;
};

export default FloatingDocs;
