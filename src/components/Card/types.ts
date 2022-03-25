import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { CardProps as ThemeUICardProps } from "theme-ui";
import { colorProps } from "../../theme/Apeswap/types";

export interface CardProps extends ThemeUICardProps, SpaceProps, HTMLAttributes<HTMLDivElement> {
  background?: colorProps;
}
