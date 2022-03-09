import React from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Flex, SvgProps } from "../..";
import Accordion from "./Accordion";
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
}

const Wrapper = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: 80px;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 100px;
  max-height: ${({ isPushed }) => (isPushed ? "800px" : "0px")};
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => `${isPushed ? "100" : "0"}%`};
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  transition: max-height 0.3s linear;
  overflow: hidden;
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
  pushNav,
  chainId,
  switchNetwork,
}) => {
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
          <MenuEntry key={entry.label} className={calloutClass} isActive={entry.href === location.pathname}>
            <MenuLink href={entry?.href}>
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
      <Flex justifyContent="center" alignItems="center" style={{ width: "100%", height: "100px" }}>
        <NetworkButton chainId={chainId} switchNetwork={switchNetwork} />
      </Flex>
    </Wrapper>
  );
};

export default MobileNavMenu;
