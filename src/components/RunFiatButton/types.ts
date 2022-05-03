import { ButtonProps } from "../ButtonNew";

export interface RunFiatButtonProps extends ButtonProps {
  runFiat: () => void;
  mini?: boolean;
}
