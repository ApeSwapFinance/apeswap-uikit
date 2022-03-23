import { BoxProps } from "theme-ui";

export interface CarouselProps extends BoxProps {
  slides: string[];
  controls?: boolean;
  autoPlay?: boolean;
  interval?: number;
  hideIndicator?: boolean;
  defaultSlide?: number;
  maxHeight?: string;
}
