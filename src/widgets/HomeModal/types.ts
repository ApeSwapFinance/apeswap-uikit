import React from "react";

export type FuncType = () => void;
export interface HomeModalProps {
  onDismiss: FuncType;
  goToFarms: FuncType;
  connectWallet: FuncType;
  goToLiquidity: FuncType;
  startEarning: FuncType;
  visible: boolean;
  title: string;
  description: string;
}

export interface StepProps {
  stepNumber: string;
  headerText: string;
  thirdText: React.ReactNode;
}
