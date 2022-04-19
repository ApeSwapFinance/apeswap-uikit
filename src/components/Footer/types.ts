import { TrackHandler } from "../../util/trackSocialClick";

export interface FooterProps {
  chainId: number;
  toggleTheme: (isDark: boolean) => void;
  switchNetwork: (chainId: number) => void;
  isDark: boolean;
  bananaPriceUsd: number | undefined;
  track?: TrackHandler | undefined;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}
