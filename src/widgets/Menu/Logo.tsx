import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, FullLogo, MobileIcon } from "./icons";
import MenuButton from "./MenuButton";
import { useMatchBreakpoints } from "../../hooks";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const { isSm, isXs } = useMatchBreakpoints();
  const innerLogo =
    isSm || isXs ? (
      <>
        <MobileIcon width="40px" />
      </>
    ) : (
      <>
        <FullLogo width="160px" />
      </>
    );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="10px" mt="5px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Apeswap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Apeswap home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
