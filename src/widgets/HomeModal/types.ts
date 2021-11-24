import React from "react";

export interface HomeModalProps {
  closeHandler: () => void;
  goToFarms: () => void;
  connectWallet: () => void;
  goToLiquidity: () => void;
  startEarning: () => void;
  visible: boolean;
  title: string;
  description: string;
}

export interface StepProps {
  stepNumber: string;
  headerText: string;
  thirdText: React.ReactNode;
}
