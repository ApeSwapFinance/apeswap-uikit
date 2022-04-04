import React from "react";
import { LegacySvgProps } from "../../components/Svg";

export type ActionHandler = () => void;

export interface MarketingModalProps {
  title: string;
  description: string;
  startEarning: ActionHandler;
  onDismiss: ActionHandler;
  t: (key: string) => string;
  children: React.ReactNode | React.ReactNode[];
}

export interface IconProps {
  step: number;
  childrensLength: number;
}

export interface ModalContentProps {
  Icon: LegacySvgProps;
}
