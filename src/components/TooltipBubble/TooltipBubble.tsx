/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "theme-ui";
import { TooltipProps, placements } from "./TooltipBubble.interface";
import style from "./styles";

const TooltipBubble: React.FC<TooltipProps> = ({
  width = "232px",
  placement = placements.BOTTOMRIGHT,
  body,
  children,
  transformTip,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [styles, setStyles] = useState({});

  const getStyles = useCallback(() => {
    const right = bodyRef?.current?.getBoundingClientRect().width;

    switch (placement) {
      case placements.BOTTOMLEFT: {
        return {
          transform: transformTip || "translate(0, 100%)",
          zIndex: 200,
        };
      }
      case placements.BOTTOMRIGHT: {
        return {
          transform: transformTip || `translate(calc(${right}px - ${width}), 100%)`,
          zIndex: 200,
        };
      }
      case placements.TOPLEFT: {
        return {
          transform: transformTip || "translate(0, -100%)",
          zIndex: 200,
        };
      }
      case placements.TOPRIGHT: {
        return {
          transform: transformTip || `translate(calc(${right}px - ${width}), -100%)`,
          zIndex: 200,
        };
      }
      default: {
        return {};
      }
    }
  }, [width, placement, transformTip]);

  useEffect(() => {
    if (bodyRef) {
      setStyles(getStyles());
    }
  }, [bodyRef, getStyles, width, placement]);

  return (
    <Box as="span" sx={style.container}>
      <Box
        sx={{
          position: "absolute",
          width,
          ...styles,
        }}
      >
        <Box
          sx={{
            position: "relative",
            ...style.default,
            ...style[placement],
          }}
        >
          {body}
        </Box>
      </Box>
      <Box
        ref={bodyRef}
        sx={{
          width: "fit-content",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default TooltipBubble;
