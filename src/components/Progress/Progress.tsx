/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import { ProgressProps } from "./types";

export const anim = keyframes({
  from: { width: "0%" },
  to: { width: "100%" },
});

const Progress: React.FC<ProgressProps> = ({
  height = "15px",
  to = 50,
  color = "gradient",
  background = "white4",
  width = "100%",
}) => {
  const [toValue, setTo] = useState(0);

  useEffect(() => {
    setTo(to);
  }, [to]);

  return (
    <div
      sx={{
        height,
        width,
        background,
        border: 0,
        borderRadius: "normal",
        position: "relative",
      }}
    >
      <div
        sx={{
          height,
          width: `${toValue}%`,
          top: 0,
          border: 0,
          background: color,
          position: "absolute",
          borderRadius: "normal",
          transition: "width 2s cubic-bezier(0.1, -0.6, 0.2, 0)",
        }}
      />
    </div>
  );
};

export default Progress;
