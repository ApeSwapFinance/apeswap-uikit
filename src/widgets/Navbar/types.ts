import { SwitchNetwork } from "../NetworkModal";
import { Login } from "../WalletModal";
import { TrackHandler } from "../../util/trackSocialClick";
import { Language } from "../../components/LangSelector/types";

export interface LangType {
  code: string;
  language: string;
}

export interface Profile {
  name?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  hover: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  isNew?: boolean;
}

export interface MenuEntry {
  label: string;
  darkIcon?: string;
  lightIcon?: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  isNew?: boolean;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  bananaPriceUsd?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  links: Array<MenuEntry>;
}

export interface LiveResultProps {
  apiResult: {
    id: number;
    label: string;
    settings: {
      id: number;
      tag: string;
      navItem: string;
    }[];
  }[];
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
  chainId: number;
  switchNetwork: SwitchNetwork;
  track?: TrackHandler | undefined;
  liveResult?: LiveResultProps["apiResult"] | undefined;
  t: (text: string) => string;
  runFiat: () => void;
}
