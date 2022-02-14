import React from "react";
import { Button } from "../Button";
import { sizes, TabProps, variants } from "./types";

const Tab: React.FC<TabProps> = ({
  activeTab,
  onClick,
  index,
  label,
  size = sizes.MEDIUM,
  variant = variants.CENTERED,
}) => {
  return (
    <Button
      size={size}
      sx={{
        border: 0,
        background: activeTab === index ? undefined : "white3",
        color: activeTab === index ? undefined : "primaryButtonDisable",
        flex: variant === variants.FULLWIDTH ? 1 : undefined,
      }}
      onClick={() => onClick(index)}
    >
      {label}
    </Button>
  );
};

export default Tab;
