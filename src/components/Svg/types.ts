import { SVGAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";
import { colorProps } from "../../theme/Apeswap/types";

export enum icons {
  CARET = "caret",
  EXTERNAL = "external",
  HOME = "home",
  CALCULATOR = "calculator",
  FARM = "farm",
  FRAME = "frame",
  GNANA = "gnana",
  INFO = "info",
  MORE = "more",
  NFA = "nfa",
  POOL = "pool",
  ROCKET = "rocket",
  TRADE = "trade",
  VAULT = "vault",
  ELLIPSE = "ellipse",
  TWITTER = "twitter",
  SEND = "send",
  ERROR = "error",
  CLOSE = "close",
  COLLAPSE = "collapse",
  TEXTLOGO = "textLogo",
  PROFILELIGHT = "profileLight",
  PROFILEDARK = "profileDark",
  PROFILEICON = "profileIcon",
  LOGO = "logo",
  HAMBURGER = "hamburger",
  SEARCH = "search",
  SUCCESS = "success",
  QUESTION = "question",
  SETTINGS = "settings",
  CHART = "chart",
  BNB_TOKEN = "bnb_token",
  BANANA_TOKEN = "banana_token",
  ETH_TOKEN = "eth_token",
  GNANA_TOKEN = "gnana_token",
  POLYGON_TOKEN = "polygon_token",
  BSC_TOKEN = "bsc_token",
  DISCORD = "discord",
  REDDIT = "reddit",
  MEDIUM = "medium",
  INSTAGRAM = "instagram",
  SWAP = "swap",
}

export enum directions {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}

export type iconTypes = `${icons}`;
type directionTypes = `${directions}`;

export interface LegacySvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  color?: string;
  bgColor?: string;
  spin?: boolean;
}
export interface SvgProps extends SpaceProps {
  icon?: iconTypes;
  direction?: directionTypes;
  color?: colorProps;
  width?: string | number;
}
