import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import Text from "../../components/Text/Text";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";
import Avatar from "./Avatar";
import Skeleton from "../../components/Skeleton/Skeleton";
import { ApeSwapRoundIcon } from "../../components/Svg";
import NetworkButton from "./NetworkButton";
import styles from "./css/menu.module.css";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const StyledFooter = styled.nav.attrs({
  className: styles.footer,
})`
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

interface InnerProps {
  isPushed: boolean;
  showMenu: boolean;
}

const Inner = styled.div.attrs<InnerProps>((props) => ({
  className: props.isPushed ? styles.innerPushed : styles.inner,
}))<InnerProps>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  font-family: Poppins;
  font-weight: 700;
`;

const MobileOnlyOverlay = styled(Overlay).attrs({
  className: styles.mobileOnlyOverlay,
})`
  position: fixed;
  height: 100%;
`;

const StyledFlex = styled(Flex).attrs({
  className: styles.networkIcon,
})``;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  bananaPriceUsd,
  links,
  profile,
  children,
  chainId,
  switchNetwork,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

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

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex>
          <StyledFlex marginRight="10px">
            <NetworkButton chainId={chainId} switchNetwork={switchNetwork} />
          </StyledFlex>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          bananaPriceUsd={bananaPriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      <StyledFooter>
        <Flex paddingLeft="10px">
          {bananaPriceUsd ? (
            <PriceLink
              href="https://info.apeswap.finance/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"
              target="_blank"
            >
              <ApeSwapRoundIcon width="24px" mr="8px" />
              <Text color="text" fontFamily="poppins" bold>{`$${bananaPriceUsd.toFixed(3)}`}</Text>
            </PriceLink>
          ) : (
            <Skeleton width={80} height={24} />
          )}
        </Flex>
        <Flex>
          <NetworkButton chainId={chainId} switchNetwork={switchNetwork} />
        </Flex>
      </StyledFooter>
    </Wrapper>
  );
};

export default Menu;
