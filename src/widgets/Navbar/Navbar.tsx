import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import { useLocation } from "react-router-dom";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";
import Avatar from "./Avatar";
import NetworkButton from "./NetworkButton";
import MenuLink from "./MenuLink";
import SubNavbar from "./SubNavbar";
import { Footer } from "../../components/Footer";
import { HamburgerCloseIcon, HamburgerIcon } from "./icons";
import MenuButton from "./MenuButton";
import MobileNavMenu from "./MobileNavMenu";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
`;

const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2px 7.5px 0px 7.5px;
  box-shadow: ${(props) => props.active && `0px 2px 0px ${props.theme.colors.text}`};
  font-size: 16px;
  font-weight: 700;
  margin: 0px 22.5px 0px 22.5px;
  color: ${({ theme }) => theme.colors.text};
  :hover {
    box-shadow: ${({ theme }) => `0px 2px 0px ${theme.colors.text}`};
  }
`;

const StyledNav = styled.nav<{ showMenu: boolean; isMobile: boolean; isPushed: boolean }>`
  position: fixed;
  top: ${({ showMenu, isMobile, isPushed }) => (showMenu || (isMobile && isPushed) ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.navbar};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  padding-left: 20px;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding-left: 25px;
    padding-right: 16px;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu, isMobile, isPushed }) => (showMenu || (isMobile && isPushed) ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  width: 100%;
  height: 100%;
  font-weight: 600;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Navbar: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  t,
  currentLang,
  setLang,
  bananaPriceUsd,
  links,
  profile,
  children,
  switchNetwork,
  chainId,
  track,
}) => {
  const { isXxl } = useMatchBreakpoints();
  const isMobile = isXxl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const [hoveredItem, setHoveredItem] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const handleClick = isMobile ? () => setIsPushed(false) : undefined;

  const handleHover = (label: string) => {
    setHoveredItem(label);
  };

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu} isMobile={isMobile} isPushed={isPushed}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        {!isMobile && (
          <Flex ml="15px" justifyContent="space-between" style={{ height: "100%" }}>
            {links.map((link) => {
              return (
                <div
                  style={{ position: "relative" }}
                  onMouseOver={() => handleHover(link.label)}
                  onFocus={() => handleHover(link.label)}
                  onMouseLeave={() => handleHover("")}
                >
                  {link.href ? (
                    <MenuLink href={link.href}>
                      <NavItem
                        key={link.href}
                        active={
                          link.href === currentPath ||
                          link.items?.find((item) => item.href === currentPath) !== undefined
                        }
                        onClick={handleClick}
                      >
                        {link.label}
                      </NavItem>
                    </MenuLink>
                  ) : (
                    <NavItem
                      key={link.href}
                      active={
                        link.href === currentPath || link.items?.find((item) => item.href === currentPath) !== undefined
                      }
                      onClick={handleClick}
                    >
                      {link.label}
                    </NavItem>
                  )}
                  {link.label === hoveredItem && link?.items && (
                    <SubNavbar
                      items={link.items}
                      image={isDark ? link.darkIcon : link.lightIcon}
                      label={link.label}
                      isDark={isDark}
                      chainId={chainId}
                      track={track}
                    />
                  )}
                </div>
              );
            })}
          </Flex>
        )}
        <Flex alignItems="center" style={{ position: "absolute", right: "30px" }}>
          {!isMobile && (
            <Flex marginRight="10px">
              <NetworkButton chainId={chainId} switchNetwork={switchNetwork} t={t} />
            </Flex>
          )}
          <UserBlock account={account} login={login} logout={logout} t={t} />
          {profile && <Avatar profile={profile} />}
          {isMobile && (
            <MenuButton aria-label="Toggle menu" onClick={() => setIsPushed(!isPushed)}>
              {isPushed ? (
                <HamburgerCloseIcon width="24px" color="text" />
              ) : (
                <HamburgerIcon width="24px" color="text" />
              )}
            </MenuButton>
          )}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        {isMobile && (
          <MobileNavMenu
            isPushed={isPushed}
            showMenu={showMenu}
            links={links}
            pushNav={setIsPushed}
            isMobile={isMobile}
            setLang={setLang}
            toggleTheme={toggleTheme}
            langs={langs}
            chainId={chainId}
            switchNetwork={switchNetwork}
            isDark={isDark}
            currentLang={currentLang}
            t={t}
          />
        )}
        <Inner isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      <Footer
        chainId={chainId}
        track={track}
        toggleTheme={toggleTheme}
        bananaPriceUsd={bananaPriceUsd}
        isDark={isDark}
        switchNetwork={switchNetwork}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
        t={t}
      />
    </Wrapper>
  );
};

export default Navbar;
