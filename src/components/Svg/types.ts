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
  TLOS_TOKEN = "tlos_token",
  BSC_TOKEN = "bsc_token",
  DISCORD = "discord",
  REDDIT = "reddit",
  MEDIUM = "medium",
  INSTAGRAM = "instagram",
  WEBSITE = "website",
  TELEGRAM = "telegram",
  ARROW = "arrow",
  SWAP_ARROWS = "swapArrows",
  INFO_SOLID = "infoSolid",
  CANCELLED = "cancelled",
  SUCCESS_OUTLINE = "successOutline",
  TRASH = "trash",
  ZAP_ARROW = "ZapArrow",
  ZAP_ICON = "ZapIcon",
  MIGRATE = "Migrate",
  MESSAGE = "message",
  POSITIONS = "Positions",
  MENU_SETTINGS = "MenuSettings",
  FAV = "Fav",
  QUIZ = "quiz",
  BRIDGE = "bridge",
  DOCS = "docs",
  URL = "URL",
  BUBBLE = "bubble",
  AUDIT = "audit",
  THREE_DOTS = "threeDots",
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
  spin?: boolean;
  bgColor?: string;
}
export interface SvgProps {
  icon?: iconTypes;
  direction?: directionTypes;
  color?: colorProps;
  width?: string | number;
  height?: string | number;
  spin?: boolean;
}
