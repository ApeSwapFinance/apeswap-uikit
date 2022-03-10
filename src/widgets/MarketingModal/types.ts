import React from "react";
import { SvgProps } from "../../components/Svg";

export type ActionHandler = () => void;

export interface MarketingModalProps {
  title: string;
  description: string;
  startEarning: ActionHandler;
  onDismiss: ActionHandler;
  children: React.ReactNode | React.ReactNode[];
}

export interface IconProps {
  step: number;
  childrensLength: number;
}

export interface ModalContentProps {
  Icon: SvgProps;
}
