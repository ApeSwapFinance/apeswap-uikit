import { ReactNode } from "react";

export type FuncType = () => void;
export interface MktModalProps {
  onDismiss: FuncType;
  goToFarms: FuncType;
  connectWallet: FuncType;
  goToLiquidity: FuncType;
  startEarning: FuncType;
  title: string;
  description: string;
}

export interface StepProps {
  stepNumber: string;
  headerText: string;
  thirdText: ReactNode;
}
