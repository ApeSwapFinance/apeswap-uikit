
export type ActionHandler = () => void;

export interface MarketModalProps {
  title: string;
  description: string;
  startEarning: ActionHandler;
  onDismiss: ActionHandler;
}
