export interface InternalProps {
  onDismiss?: () => void;
  t?: (key: string) => string;
}

export interface ModalProps extends InternalProps {
  open?: boolean;
  minWidth?: string;
  maxWidth?: string;
  title?: string;
}

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  handleClose?: Handler;
}
