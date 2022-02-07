export enum sizes {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export enum variants {
  CENTERED = "centered",
  FULLWIDTH = "fullWidth",
}

export type variantProps = `${variants}`;
export type sizeProps = `${sizes}`;

export interface TabProps {
  index: number;
  activeTab?: number;
  label: string;
  onClick: (activeTab: number) => void;
  size: sizeProps;
  variant: variantProps;
}

export interface TabsProps {
  children?: any;
  variant?: variantProps;
}

export interface TabPanelProps {
  children?: any;
  index: number;
  activeTab: number;
}
