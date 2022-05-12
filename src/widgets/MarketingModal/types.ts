import React from "react";
import { LegacySvgProps } from "../../components/Svg";

export type ActionHandler = () => void;

export interface MarketingModalProps {
  title: string;
  description?: string;
  startEarning?: ActionHandler | undefined;
  startEarningText?: string | undefined;
  onDismiss: ActionHandler;
  children: React.ReactNode | React.ReactNode[];
}

export interface IconProps {
  step: number;
  childrensLength: number;
}

export interface ModalContentProps {
  Icon?: LegacySvgProps;
}
