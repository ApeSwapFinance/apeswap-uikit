import { colorProps } from "../../theme/Apeswap/types";

export enum icons {
  CARET = "caret",
  EXTERNAL = "external",
  TWITTER = "twitter",
  SEND = "send",
  ERROR = "error",
  CLOSE = "close",
}

export enum directions {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}

type iconTypes = `${icons}`;
type directionTypes = `${directions}`;

export interface IconSVGProps {
  icon?: iconTypes;
  direction?: directionTypes;
  color?: colorProps;
  width?: string | number;
}
