import { MenuEntry } from "./types";

export const links: MenuEntry[] = [
  {
    label: "Exchange",
    href: "/swap",
    isNew: false,
  },
  {
    label: "Stake",
    lightIcon: "StakeLightImage",
    darkIcon: "StakeDarkImage",
    items: [
      {
        label: "BANANA Farms",
        href: "/farms",
        isNew: false,
      },
      {
        label: "Pools",
        href: "/pools",
        isNew: false,
      },
      {
        label: "Jungle Farms",
        href: "/jungle-farms",
        isNew: true,
      },
      {
        label: "Vaults",
        href: "/vaults",
        isNew: false,
      },
      {
        label: "GNANA",
        href: "/gnana",
        isNew: false,
      },
    ],
  },
  {
    label: "Raise",
    lightIcon: "OfferingsLightImage",
    darkIcon: "OfferingsDarkImage",
    items: [
      {
        label: "Treasury Bills",
        href: "/treasury-bills",
        isNew: false,
      },
      {
        label: "Official IAO",
        href: "/iao",
        isNew: false,
      },
      {
        label: "Self-Serve IAO",
        href: "/ss-iao",
        isNew: false,
      },
    ],
  },

  {
    label: "Collect",
    lightIcon: "NfaLightImage",
    darkIcon: "NfaDarkImage",
    items: [
      {
        label: "Collection",
        href: "/nft",
        isNew: false,
      },
      {
        label: "NFA Auction",
        href: "/auction",
        isNew: false,
      },
      {
        label: "Staking",
        href: "/staking",
        isNew: false,
      },
    ],
  },
  {
    label: "Lend",
    href: "https://app.ola.finance/apeswap/markets",
    isNew: false,
  },
  {
    label: "Explore",
    lightIcon: "MoreLightImage",
    darkIcon: "MoreDarkImage",
    items: [
      {
        label: "ApeStats",
        href: "/apestats",
        isNew: true,
      },
      {
        label: "Documentation",
        href: "https://apeswap.gitbook.io/apeswap-finance/",
        isNew: false,
      },
      {
        label: "Charts",
        href: "https://apeswap.finance",
        isNew: false,
      },
      {
        label: "Governance",
        href: "https://vote.apeswap.finance",
        isNew: false,
      },
      {
        label: "Education",
        href: "https://www.apelabs.education/",
        isNew: false,
      },
    ],
  },
];

export const MENU_HEIGHT = 60;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
