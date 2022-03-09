import React from "react";
import { FullLogo } from "../../widgets/Navbar/icons";
import NetworkButton from "../../widgets/Navbar/NetworkButton";
import { Skeleton } from "../Skeleton";
import {
  ApeSwapRoundIcon,
  DiscordIcon,
  InstagramIcon,
  MediumIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "../Svg";
import { Text } from "../Text";
import { FooterProps } from "./types";
import { supportLinks, engageLinks, learnLinks } from "./config";
import {
  FlexContainer,
  Container,
  PeakingMonkey,
  PriceLink,
  IconFlex,
  LinkskWrapper,
  LinkColumnFlex,
  LogoFlex,
  ButtonFlex,
  LinkText,
  StyledLink,
  BuyBananaButton,
  BottomRowContainer,
} from "./styles";
import lightTheme from "../../theme/light";
import darkTheme from "../../theme/dark";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useMatchBreakpoints } from "../..";
import MobileLinks from "./MobileLinks";

const Footer: React.FC<FooterProps> = ({ chainId, toggleTheme, isDark, bananaPriceUsd, switchNetwork }) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const { isXxl, isLg, isXl } = useMatchBreakpoints();
  const isMobile = isXxl === false && isXl === false && isLg === false;
  return (
    <Container>
      <FlexContainer>
        <LogoFlex>
          <FullLogo width="240px" mb="20px" />
          <Text color="white">
            ApeSwap is a leading decentralized exchange (DEX) on Binance Smart Chain and Polygon focused on offering a
            premier trading experience
          </Text>
          <ButtonFlex>
            <ThemeSwitcher toggleTheme={toggleTheme} isDark={isDark} />
            <NetworkButton chainId={chainId} switchNetwork={switchNetwork} />
          </ButtonFlex>
          <IconFlex>
            <StyledLink href="https://twitter.com/ape_swap" target="_blank" rel="noopener noreferrer">
              <TwitterIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://discord.com/invite/ApeSwap" target="_blank" rel="noopener noreferrer">
              <DiscordIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://t.me/ape_swap" target="_blank" rel="noopener noreferrer">
              <TelegramIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://www.reddit.com/r/Apeswap/" target="_blank" rel="noopener noreferrer">
              <RedditIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://ape-swap.medium.com/" target="_blank" rel="noopener noreferrer">
              <MediumIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://www.instagram.com/apeswap.finance/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon color="white3" fill={iconFillColor} />
            </StyledLink>
          </IconFlex>
          <BottomRowContainer>
            <div>
              {bananaPriceUsd ? (
                <PriceLink
                  href="https://info.apeswap.finance/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"
                  target="_blank"
                >
                  <ApeSwapRoundIcon width="34px" mr="8px" />
                  <Text color="white" fontSize="18px" fontWeight={600}>{`$${bananaPriceUsd.toFixed(3)}`}</Text>
                </PriceLink>
              ) : (
                <Skeleton width={90} height={35} />
              )}
            </div>
            <a href="https://apeswap.finance/swap" target="_blank" rel="noopener noreferrer">
              <BuyBananaButton>BUY BANANA</BuyBananaButton>
            </a>
          </BottomRowContainer>
        </LogoFlex>
        {isMobile ? (
          <MobileLinks />
        ) : (
          <LinkskWrapper>
            <LinkColumnFlex style={{ width: "200px" }}>
              <Text color="rgba(255, 179, 0, 1)" fontSize="22px" bold>
                Support
              </Text>
              {supportLinks.map((link) => {
                return (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <LinkText>{link.label}</LinkText>
                  </a>
                );
              })}
            </LinkColumnFlex>
            <LinkColumnFlex style={{ width: "240px" }}>
              <Text color="rgba(255, 179, 0, 1)" fontSize="22px" bold>
                Engage
              </Text>
              {engageLinks.map((link) => {
                return (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <LinkText>{link.label}</LinkText>
                  </a>
                );
              })}
            </LinkColumnFlex>
            <LinkColumnFlex style={{ width: "100px" }}>
              <Text color="rgba(255, 179, 0, 1)" fontSize="22px" bold>
                Learn
              </Text>
              {learnLinks.map((link) => {
                return (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <LinkText>{link.label}</LinkText>
                  </a>
                );
              })}
            </LinkColumnFlex>
          </LinkskWrapper>
        )}
      </FlexContainer>
      <PeakingMonkey />
    </Container>
  );
};

export default Footer;
