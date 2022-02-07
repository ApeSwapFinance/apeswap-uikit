export interface InternalProps {
  handleClose?: () => void;
}

export interface ModalProps extends InternalProps {
  open?: boolean;
  minWidth?: string;
  maxWidth?: string;
}
