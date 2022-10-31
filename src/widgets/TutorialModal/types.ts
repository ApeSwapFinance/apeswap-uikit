export type ActionHandler = () => void;

export interface TModalProps {
  t: (key: string) => string;
  onDismiss: ActionHandler;
  title: string;
  description?: string;
  readyText: string;
  onReady?: ActionHandler;
  // Icon?: LegacySvgProps;
  icon?: string;
  children: React.ReactNode | React.ReactNode[];
}

export interface CountProps {
  index?: number;
  step?: number;
  childrensLength?: number;
}
