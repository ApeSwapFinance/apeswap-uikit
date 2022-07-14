import React, { ReactNode } from "react";
import { BoxProps } from "theme-ui";

export enum placements {
  TOPRIGHT = "topRight",
  TOPLEFT = "topLeft",
  BOTTOMRIGHT = "bottomRight",
  BOTTOMLEFT = "bottomLeft",
}

export type placementProps = `${placements}`;

export interface TooltipProps extends BoxProps {
  width?: string;
  placement?: placementProps;
  body: ReactNode;
  hideTooltip?: boolean;
  transformTip?: string;
}
