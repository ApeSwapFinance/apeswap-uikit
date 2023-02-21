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
import { GlowCircle } from "../../components/GlowCircle";
import { RunFiatButton } from "../../components/RunFiatButton";
import styles from "./styles";
import LangSelectorButton from "../../components/LangSelectorButton/LangSelectorButton";
import { Newsletter } from "../Newsletter";

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
  margin: 0px 22.5px;
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
  sidName,
  uDName,
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  t,
  currentLang,
  bananaPriceUsd,
  links,
  profile,
  children,
  switchNetwork,
  chainId,
  track,
  liveResult,
  runFiat,
  iframe,
  mailChimpUrl,
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

  const exchangeActive =
    currentPath.includes("migrate") ||
    currentPath.includes("/add-liquidity") ||
    currentPath.includes("/liquidity") ||
    currentPath.includes("/remove") ||
    currentPath.includes("/unstake");

  return (
    <Wrapper>
      {!iframe && (
        <StyledNav showMenu={showMenu} isMobile={isMobile} isPushed={isPushed}>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          {!isMobile && (
            <Flex sx={styles.rightMenu}>
              {links.map((link) => {
                const found = liveResult?.find((result) => result.label === link.label);
                return (
                  <div
                    style={{ position: "relative" }}
                    onMouseOver={() => handleHover(link.label)}
                    onFocus={() => handleHover(link.label)}
                    onMouseLeave={() => handleHover("")}
                  >
                    {link.href ? (
                      <MenuLink href={link.href} target={link.label === "Lend" ? "_blank" : "_self"}>
                        <NavItem
                          key={link.href}
                          active={
                            link.href === currentPath ||
                            link.items?.find((item) => item.href === currentPath) !== undefined ||
                            (link.label === t("Exchange") && exchangeActive)
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
                          link.href === currentPath ||
                          link.items?.find((item) => item.href === currentPath) !== undefined ||
                          (link.label === t("Exchange") && exchangeActive)
                        }
                        onClick={handleClick}
                      >
                        {link.label}
                        {(link.label === "Raise" || link.label === "Collect" || link.label === "Explore") &&
                          found?.label === link.label &&
                          found?.settings[0]?.tag === "LIVE" && <GlowCircle />}
                      </NavItem>
                    )}
                    {link.label === hoveredItem && link?.items && (
                      <div style={{ display: "flex", backgroundColor: "red" }}>
                        <SubNavbar
                          items={link.items}
                          image={isDark ? link.darkIcon : link.lightIcon}
                          position={link.label}
                          isDark={isDark}
                          chainId={chainId}
                          track={track}
                          subMenu={found?.settings}
                          runFiat={runFiat}
                          t={t}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </Flex>
          )}
          <Flex
            sx={{
              alignItems: "center",
              position: "absolute",
              right: "20px",
            }}
          >
            {!isMobile && (
              <Flex sx={{ alignItems: "center", marginRight: "10px" }}>
                <LangSelectorButton currentLang={currentLang} langs={langs} setLang={setLang} t={t} />
                <RunFiatButton
                  mini
                  runFiat={runFiat}
                  t={t}
                  sx={{ width: "30px" }}
                  track={track}
                  position="NavBar"
                  chainId={chainId}
                />
                <NetworkButton chainId={chainId} switchNetwork={switchNetwork} t={t} />
              </Flex>
            )}
            <UserBlock sidName={sidName} uDName={uDName} account={account} login={login} logout={logout} t={t} />
            {(uDName || sidName || account) && profile && <Avatar profile={profile} />}
            {isMobile && (
              <MenuButton aria-label="Toggle menu" handleClick={() => setIsPushed(!isPushed)}>
                {isPushed ? (
                  <HamburgerCloseIcon width="24px" color="text" />
                ) : (
                  <HamburgerIcon width="24px" color="text" />
                )}
              </MenuButton>
            )}
          </Flex>
        </StyledNav>
      )}
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
            track={track}
            liveResult={liveResult}
            currentLang={currentLang}
            t={t}
            runFiat={runFiat}
          />
        )}
        <Inner isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      {/* Should put Newsletter here -> isModal should be false */}
      <Newsletter mailChimpUrl={mailChimpUrl} t={t} />
      {!iframe && (
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
          runFiat={runFiat}
        />
      )}
    </Wrapper>
  );
};

export default Navbar;
