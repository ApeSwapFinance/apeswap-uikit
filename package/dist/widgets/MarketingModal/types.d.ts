import { ReactNode } from "react";
export declare type Handler = () => void;
export interface MktModalProps {
    onDismiss: Handler;
    goToFarms: Handler;
    connectWallet: () => void;
    goToLiquidity: Handler;
    startEarning: Handler;
    title: string;
    description: string;
}
export interface StepProps {
    stepNumber: string;
    headerText: string;
    thirdText: ReactNode;
}
