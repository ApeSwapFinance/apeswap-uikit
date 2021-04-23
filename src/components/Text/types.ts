import { SpaceProps } from "styled-system";

export interface TextProps extends SpaceProps {
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  bold?: boolean;
  small?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  textAlign?: string;
  fontWeight?: number;
}
