import React from "react";

export type ActionHandler = () => void;

export interface TModalProps {
  t: (key: string) => string;
  onDismiss: ActionHandler;
  type: string;
  title: string;
  description?: string;
  children: React.ReactNode[];
  isConnected: boolean;
  width?: string;
}

export interface CountProps {
  index: number;
  goToStep: ActionHandler;
  isActive: boolean;
}

export interface ShowApeType {
  slideNumber?: number;
  type?: string;
}
