import { ReactNode } from "react";

export interface FormType {
  status: string;
  message: string;
  onValidated: ({...arg}) => void;
  t: (text: string) => string;
  isModal?: boolean;
}

export interface NewsletterProps {
  isModal?: boolean;
  mailChimpUrl: string;
  t: (text: string) => string;
}

export interface MCSubscribeProps {
  status: string;
  message: string;
  subscribe: ({ ...arg }) => ReactNode;
}
