/** @jsxImportSource theme-ui */
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import darkTheme from "../../theme/dark";
import lightTheme from "../../theme/light";
import Accordion from "./Accordion";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "./icons";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";
import NetworkButton from "./NetworkButton";
import { LiveResultProps, PanelProps, PushedProps } from "./types";
import Text from "../../components/Text/Text";
import Tag from "../../components/Tag/Tag";
import Flex from "../../components/Flex/Flex";
import trackSocialClick, { TrackHandler } from "../../util/trackSocialClick";
import styles from "./styles";
import LangSelectorButton from "../../components/LangSelectorButton/LangSelectorButton";

interface MobileNavMenuProps extends PanelProps, PushedProps {
  isMobile: boolean;
  isPushed: boolean;
  showMenu: boolean;
  chainId: number;
  switchNetwork: (chainId: number) => void;
  track?: TrackHandler;
  liveResult?: LiveResultProps["apiResult"];
  t: (key: string) => string;
}

const StyledLink = styled.a`
  :hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: 62.5px;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 100px;
  max-height: ${({ isPushed }) => (isPushed ? "100vh" : "0px")};
  background-color: ${({ theme }) => theme.colors.navbar};
  width: ${({ isPushed }) => `${isPushed ? "100" : "0"}%`};
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  transition: max-height 0.3s linear;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: 0px;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? "100" : "0"}%`};
  }
`;

const NewMenuLink = styled(MenuLink)`
  display: flex;
  align-items: center;
`;
const StyledTag = styled(Tag)`
  font-size: 10px;
  padding: 0px 6px !important;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  height: auto;
`;

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  isPushed,
  showMenu,
  links,
  isMobile,
  isDark,
  pushNav,
  chainId,
  switchNetwork,
  setLang,
  currentLang,
  langs,
  track,
  liveResult,
  t,
}) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  const location = useLocation();

  const label = "More";

  return (
    <Wrapper isPushed={isPushed} showMenu={showMenu}>
      {links.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        const found = liveResult?.find((result) => result.label === entry.label);

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
              found={found}
            >
              {isPushed &&
                entry.items.map((item) => {
                  const subMenu = found?.settings?.find((menu) => menu.navItem === item.label);
                  return (
                    <MenuEntry
                      key={item.href}
                      secondary
                      isActive={item.href === location.pathname}
                      onClick={handleClick}
                    >
                      <NewMenuLink href={item.href}>
                        <Text
                          sx={{
                            ...styles.dropDownMenuText,
                            "&&&": {
                              background:
                                item.label === "GNANA" && "linear-gradient(53.53deg, #A16552 15.88%, #E1B242 92.56%)",
                              WebkitBackgroundClip: item.label === "GNANA" && "text",
                              backgroundClip: item.label === "GNANA" && "text",
                              WebkitTextFillColor: item.label === "GNANA" && "transparent",
                              textFillColor: item.label === "GNANA" && "transparent",
                            },
                            "&:hover": {
                              boxShadow: `0px 2px 0px ${iconFillColor}`,
                            },
                          }}
                          weight={700}
                          size="16px"
                          label={item.label}
                        >
                          {item.label}
                        </Text>
                        {/* <StyledText label={item.label}>{item.label}</StyledText> */}
                        {(item?.isNew || subMenu?.tag === "LIVE") && (
                          <StyledTag variant={subMenu?.tag === "LIVE" ? "success" : "binance"}>
                            {subMenu?.tag === "LIVE" ? "LIVE" : "NEW"}
                          </StyledTag>
                        )}
                      </NewMenuLink>
                    </MenuEntry>
                  );
                })}
            </Accordion>
          );
        }
        return (
          <MenuEntry
            key={entry.label}
            className={calloutClass}
            isActive={entry.href === location.pathname}
            onClick={handleClick}
          >
            <MenuLink href={entry?.href} target={entry.label === "Lend" ? "_blank" : "_parent"}>
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100px",
          padding: "20px 0",
        }}
      >
        <Flex
          sx={{
            "@media screen and (max-width: 400px)": {
              flexDirection: "column-reverse",
              alignItems: "center",
            },

            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "200px",
            }}
          >
            <StyledLink href="https://twitter.com/ape_swap" target="_blank" rel="noopener noreferrer">
              <TwitterIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "twitter", label, "https://twitter.com/ape_swap", chainId)}
              />
            </StyledLink>
            <StyledLink href="https://t.me/ape_swap" target="_blank" rel="noopener noreferrer">
              <TelegramIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "telegram", label, "https://t.me/ape_swap", chainId)}
              />
            </StyledLink>
            <StyledLink href="https://t.me/ape_swap" target="_blank" rel="noopener noreferrer">
              <DiscordIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "discord", label, "https://discord.com/invite/ApeSwap", chainId)}
              />
            </StyledLink>
          </div>
          <Flex
            sx={{
              "@media screen and (max-width: 400px)": {
                marginBottom: "10px",
              },
            }}
          >
            <LangSelectorButton currentLang={currentLang} langs={langs} setLang={setLang} t={t} />
            <NetworkButton chainId={chainId} switchNetwork={switchNetwork} t={t} />
          </Flex>
        </Flex>
      </div>
    </Wrapper>
  );
};

MobileNavMenu.defaultProps = {
  track: undefined,
  liveResult: undefined,
};

export default MobileNavMenu;
