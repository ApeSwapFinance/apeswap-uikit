import React from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";
import { TooltipProps, placements } from "./TooltipBubble.interface";
import style, { container } from "./styles";

const placementStyles = {
  [placements.BOTTOMLEFT]: {
    top: "calc(100% + 15px)",
    left: 0,
  },
  [placements.BOTTOMRIGHT]: {
    top: "calc(100% + 15px)",
    right: 0,
  },
  [placements.TOPLEFT]: {
    bottom: "calc(100% + 15px)",
    left: 0,
  },
  [placements.TOPRIGHT]: {
    bottom: "calc(100% + 15px)",
    right: 0,
  },
};

const TooltipBubble: React.FC<TooltipProps> = ({
  width,
  placement = placements.BOTTOMRIGHT,
  body,
  backgroundColor,
  hideTooltip,
  children,
  transformTip,
  ...props
}) => {
  const backgroundColorStyle = backgroundColor
    ? ({
        backgroundColor,
        "&:before": {
          borderBottomColor:
            placement === placements.BOTTOMLEFT || placement === placements.BOTTOMRIGHT ? backgroundColor : undefined,
          borderTopColor:
            placement === placements.TOPLEFT || placement === placements.TOPRIGHT ? backgroundColor : undefined,
        },
      } as ThemeUIStyleObject)
    : {};

  return (
    <Box sx={container(hideTooltip)}>
      <Box
        sx={{
          position: "absolute",
          ...(placementStyles[placement] || {}),
        }}
      >
        <Box
          sx={{
            position: "relative",
            ...style.default,
            ...style[placement],
            ...backgroundColorStyle,
            width,
            transform: transformTip,
          }}
          {...props}
        >
          {body}
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default TooltipBubble;
