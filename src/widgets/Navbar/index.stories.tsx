import React, { useState } from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Navbar from "./Navbar";
import { MenuEntry } from "./MenuEntry";
import { links } from "./config";
import { TrackHandler, TrackProps } from "../../util/trackClick";
import StorybookLayout from "../../components/StorybookLayout/StorybookLayout";
import { Language } from "../../components/LangSelector/types";

export default {
  title: "Widgets/Navbar",
  component: Navbar,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      control: { type: "inline-radio" },
    },
  },
};

const langs: Language[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}`, locale: `e${i}` }));
const translate: (key: string) => string = (key) => key;
const track: TrackHandler =
  // eslint-disable-next-line no-empty-pattern
    ({}: TrackProps) =>
    () => ({});
const mcLink = "";

export const Connected: React.FC = (args: any) => {
  const [currentLang, setCurrentLang] = useState("English1");

  const navbarApiResult = [
    {
      id: 1,
      settings: [
        { id: 1, label: "Raise", settings: [{ id: 1, tag: "LIVE", navItem: "Official IAO" }] },
        { id: 2, label: "Collect", settings: [{ id: 2, tag: "LIVE", navItem: "NFA Auction" }] },
        { id: 3, label: "Explore", settings: [{ id: 1, tag: "LIVE", navItem: "ApeStats" }] },
      ],
      published_at: "2022-04-11T18:15:41.981Z",
      created_at: "2022-04-11T18:15:39.418Z",
      updated_at: "2022-04-12T14:20:12.100Z",
    },
  ][0].settings;

  return (
    <StorybookLayout {...args}>
      <BrowserRouter>
        <Navbar
          mailChimpUrl={mcLink}
          account="0xbdda50183d817c3289f895a4472eb475967dc980"
          login={noop}
          logout={noop}
          isDark={false}
          toggleTheme={noop}
          langs={langs}
          setLang={(lang) => setCurrentLang(lang.language)}
          currentLang={currentLang}
          t={translate}
          bananaPriceUsd={0.23158668932877668}
          links={links}
          profile={{
            profileLink: "https://ipfs.io/ipfs/QmYhuJnr3GGUnDGtg6rmSXTgo7FzaWgrriqikfgn5SkXhZ/7142.png",
            noProfileLink: "",
            image: "https://ipfs.io/ipfs/QmYhuJnr3GGUnDGtg6rmSXTgo7FzaWgrriqikfgn5SkXhZ/7142.png",
          }}
          chainId={137}
          switchNetwork={noop}
          track={track}
          liveResult={navbarApiResult}
          runFiat={noop}
          iframe={false}
        >
          <div>
            <Heading as="h1" mb="8px">
              Page body
            </Heading>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut
            </Text>
          </div>
        </Navbar>
      </BrowserRouter>
    </StorybookLayout>
  );
};

export const NotConnected: React.FC = () => {
  const navbarApiResult = [
    {
      id: 1,
      settings: [
        { id: 1, label: "Raise", settings: [{ id: 1, tag: "NOT", navItem: "Official IAO" }] },
        { id: 2, label: "Collect", settings: [{ id: 2, tag: "LIVE", navItem: "NFA Auction" }] },
      ],
      published_at: "2022-04-11T18:15:41.981Z",
      created_at: "2022-04-11T18:15:39.418Z",
      updated_at: "2022-04-12T14:20:12.100Z",
    },
  ][0].settings;
  return (
    <BrowserRouter>
      <Navbar
        mailChimpUrl={mcLink}
        sidName={undefined}
        uDName={undefined}
        account={undefined}
        login={noop}
        logout={noop}
        isDark
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        links={links}
        chainId={56}
        switchNetwork={noop}
        liveResult={navbarApiResult}
        track={track}
        runFiat={noop}
        t={translate}
        iframe={false}
      >
        <div style={{ lineHeight: "30px" }}>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Navbar>
    </BrowserRouter>
  );
};

export const WithNoProfile: React.FC = () => {
  const navbarApiResult = [
    {
      id: 1,
      settings: [
        { id: 1, label: "Raise", settings: [{ id: 1, tag: "NOT", navItem: "Official IAO" }] },
        { id: 2, label: "Collect", settings: [{ id: 2, tag: "LIVE", navItem: "NFA Auction" }] },
      ],
      published_at: "2022-04-11T18:15:41.981Z",
      created_at: "2022-04-11T18:15:39.418Z",
      updated_at: "2022-04-12T14:20:12.100Z",
    },
  ][0].settings;
  return (
    <BrowserRouter>
      <Navbar
        mailChimpUrl={mcLink}
        sidName="bbdrape.bnb"
        uDName={undefined}
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        bananaPriceUsd={0.23158668932877668}
        links={links}
        chainId={56}
        switchNetwork={noop}
        profile={{
          profileLink: "/profile",
          noProfileLink: "/no-profile",
        }}
        liveResult={navbarApiResult}
        track={track}
        runFiat={noop}
        t={translate}
        iframe={false}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Navbar>
    </BrowserRouter>
  );
};

export const WithProfile: React.FC = () => {
  const navbarApiResult = [
    {
      id: 1,
      settings: [
        { id: 1, label: "Raise", settings: [{ id: 1, tag: "NOT", navItem: "Official IAO" }] },
        { id: 2, label: "Collect", settings: [{ id: 2, tag: "LIVE", navItem: "NFA Auction" }] },
      ],
      published_at: "2022-04-11T18:15:41.981Z",
      created_at: "2022-04-11T18:15:39.418Z",
      updated_at: "2022-04-12T14:20:12.100Z",
    },
  ][0].settings;
  return (
    <BrowserRouter>
      <Navbar
        mailChimpUrl={mcLink}
        sidName="bbdrape.bnb"
        uDName="babadrape64.wallet"
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        bananaPriceUsd={0.23158668932877668}
        links={links}
        chainId={56}
        switchNetwork={noop}
        profile={{
          name: "apeswap",
          image: "https://raw.githubusercontent.com/ApeSwapFinance/non-fungible-apes/main/images/4.png",
          profileLink: "/profile",
          noProfileLink: "/no-profile",
        }}
        liveResult={navbarApiResult}
        track={track}
        runFiat={noop}
        t={translate}
        iframe={false}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Navbar>
    </BrowserRouter>
  );
};

export const MenuEntryComponent: React.FC = () => {
  return (
    <Flex sx={{ backgroundColor: "wheat", justifyContent: "space-between", padding: "16px" }}>
      <MenuEntry>Default</MenuEntry>
      <MenuEntry secondary>Secondary</MenuEntry>
      <MenuEntry isActive>isActive</MenuEntry>
    </Flex>
  );
};
