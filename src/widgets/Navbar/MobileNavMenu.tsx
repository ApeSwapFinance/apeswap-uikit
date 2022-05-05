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

interface MobileNavMenuProps extends PanelProps, PushedProps {
  isMobile: boolean;
  isPushed: boolean;
  showMenu: boolean;
  chainId: number;
  switchNetwork: (chainId: number) => void;
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

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  isPushed,
  showMenu,
  links,
  isMobile,
  isDark,
  pushNav,
  chainId,
  switchNetwork,
  t,
}) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  const location = useLocation();
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
                    <MenuLink href={item.href}>{item.label}</MenuLink>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "275px",
          }}
        >
          <StyledLink href="https://twitter.com/ape_swap" target="_blank" rel="noopener noreferrer">
            <TwitterIcon color="white3" fill={iconFillColor} />
          </StyledLink>
          <StyledLink href="https://discord.com/invite/ApeSwap" target="_blank" rel="noopener noreferrer">
            <TelegramIcon color="white3" fill={iconFillColor} />
          </StyledLink>
          <StyledLink href="https://t.me/ape_swap" target="_blank" rel="noopener noreferrer">
            <DiscordIcon color="white3" fill={iconFillColor} />
          </StyledLink>
          <NetworkButton chainId={chainId} switchNetwork={switchNetwork} t={t} />
        </div>
      </div>
    </Wrapper>
  );
};

export default MobileNavMenu;
