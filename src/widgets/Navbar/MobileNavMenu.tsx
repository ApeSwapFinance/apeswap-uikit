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
import { PanelProps, PushedProps } from "./types";
import Text from "../../components/Text/Text";
import Tag from "../../components/Tag/Tag";
import Flex from "../../components/Flex/Flex";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import trackSocialClick, { TrackHandler } from "../../util/trackSocialClick";

interface MobileNavMenuProps extends PanelProps, PushedProps {
  isMobile: boolean;
  isPushed: boolean;
  showMenu: boolean;
  chainId: number;
  switchNetwork: (chainId: number) => void;
  track?: TrackHandler | undefined;
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

const StyledText = styled(Text)<{ label?: string }>`
  margin-top: 6px;
  margin-bottom: 6px;
  margin-right: 6px;
  font-weight: 700;

  background: ${({ label }) =>
    label === "GNANA" &&
    "linear-gradient(90deg, #ba801e 0%, #ffe988 20.68%, #ba801e 42.29%, #ffe988 66.19%, #ba801e 88.25%)"};
  -webkit-background-clip: ${({ label }) => label === "GNANA" && "text"};
  -webkit-text-fill-color: ${({ label }) => label === "GNANA" && "transparent"};
  background-clip: ${({ label }) => label === "GNANA" && "text"};
  text-fill-color: ${({ label }) => label === "GNANA" && "transparent"};

  :hover {
    box-shadow: ${({ theme }) => `0px 2px 0px ${theme.colors.text}`};
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

const BottomContent = styled(Flex)`
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
`;

const RightBottom = styled(Flex)`
  @media screen and (max-width: 400px) {
    margin-bottom: 10px;
  }
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
  toggleTheme,
  track,
}) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  const location = useLocation();

  const label = "More";

  return (
    <Wrapper isPushed={isPushed} showMenu={showMenu}>
      {links.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <NewMenuLink href={item.href}>
                      <StyledText label={item.label}>{item.label}</StyledText>
                      {(item?.isNew || item?.isLive) && (
                        <StyledTag variant={item?.isLive ? "success" : "binance"}>
                          {item?.isLive ? "LIVE" : "NEW"}
                        </StyledTag>
                      )}
                    </NewMenuLink>
                  </MenuEntry>
                ))}
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
            <MenuLink href={entry?.href}>
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
        <BottomContent>
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
          <RightBottom>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} isMini={true} />
            <NetworkButton chainId={chainId} switchNetwork={switchNetwork} />
          </RightBottom>
        </BottomContent>
      </div>
    </Wrapper>
  );
};

export default MobileNavMenu;
