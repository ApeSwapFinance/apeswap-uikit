import { ButtonProps } from "../ButtonNew";
export interface RunFiatButtonProps extends ButtonProps {
  mini?: boolean;
  runFiat: () => void;
}
