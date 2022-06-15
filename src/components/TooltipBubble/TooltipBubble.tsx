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
  ...props
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [styles, setStyles] = useState({});

  const getStyles = useCallback(() => {
    const right = bodyRef?.current?.getBoundingClientRect().width;

    switch (placement) {
      case placements.BOTTOMLEFT: {
        return {
          bottom: 0,
          transform: "translate(0, 100%)",
        };
      }
      case placements.BOTTOMRIGHT: {
        return {
          bottom: 0,
          transform: `translate(calc(${right}px - ${width}), 100%)`,
        };
      }
      case placements.TOPLEFT: {
        return {
          top: 0,
          transform: "translate(0, -100%)",
        };
      }
      case placements.TOPRIGHT: {
        return {
          top: 0,
          transform: `translate(calc(${right}px - ${width}), -100%)`,
        };
      }
      default: {
        return {};
      }
    }
  }, [width, placement]);

  useEffect(() => {
    if (bodyRef) {
      setStyles(getStyles());
    }
  }, [bodyRef, getStyles, width, placement]);

  return (
    <Box as="span" sx={style.container} {...props}>
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
