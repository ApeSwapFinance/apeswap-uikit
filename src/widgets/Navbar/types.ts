import { SwitchNetwork } from "../NetworkModal";
import { Login } from "../WalletModal";
import { TrackHandler } from "../../util/trackSocialClick";

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
}

export interface MenuEntry {
  label: string;
  darkIcon?: string;
  lightIcon?: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  bananaPriceUsd?: number;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  links: Array<MenuEntry>;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
  chainId: number;
  t: (text: string) => string;
  switchNetwork: SwitchNetwork;
  track?: TrackHandler | undefined;
}
