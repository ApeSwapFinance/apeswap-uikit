import { TrackHandler } from "../../util/trackClick";
import { Language } from "../LangSelector/types";

export interface FooterProps {
  chainId: number;
  toggleTheme: (isDark: boolean) => void;
  switchNetwork: (chainId: number) => void;
  isDark: boolean;
  bananaPriceUsd?: number;
  track?: TrackHandler;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  t: (text: string) => string;
  runFiat: () => void;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}
