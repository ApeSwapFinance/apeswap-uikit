import React from "react";
import { LegacySvgProps } from "../../components/Svg";

export type ActionHandler = () => void;

export interface MarketingModalProps {
  title: string;
  description?: string;
  onDismiss: ActionHandler;
  startEarning?: ActionHandler | undefined;
  startEarningText?: string | undefined;
  children: React.ReactNode | React.ReactNode[];
}

export interface IconProps {
  step: number;
  childrensLength: number;
}

export interface ModalContentProps {
  Icon?: LegacySvgProps;
}
