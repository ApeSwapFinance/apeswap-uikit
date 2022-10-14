export interface FormType {
  status: string;
  message: string;
  onValidated: ({ ...arg }) => void;
  t: (text: string) => string;
  isModal?: boolean;
}

export interface NewsletterProps {
  isNewsModal?: boolean;
  mailChimpUrl: string;
  t: (text: string) => string;
}

export interface NewsModalProps extends NewsletterProps {
  onDismiss?: () => void;
}

export interface PrivacyProps {
  isModal?: boolean;
  t: (text: string) => string;
}
