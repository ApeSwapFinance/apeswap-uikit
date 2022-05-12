import { TrackHandler } from "../../util/trackSocialClick";
import { LangType } from "../../widgets/Navbar";

export interface FooterProps {
  chainId: number;
  toggleTheme: (isDark: boolean) => void;
  switchNetwork: (chainId: number) => void;
  isDark: boolean;
  bananaPriceUsd: number | undefined;
  track?: TrackHandler | undefined;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  t: (text: string) => string;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}
