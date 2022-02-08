import React from "react";
import { FullLogo, MoonIcon, SunIcon } from "../../widgets/Navbar/icons";
import NetworkButton from "../../widgets/Navbar/NetworkButton";
import { Flex } from "../Flex";
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
  StyledButton,
  PeakingMonkey,
  PriceLink,
  IconFlex,
  LinkskWrapper,
  LinkColumnFlex,
  LogoFlex,
  ButtonFlex,
  LinkText,
  StyledLink,
} from "./styles";
import lightTheme from "../../theme/light";
import darkTheme from "../../theme/dark";

const Footer: React.FC<FooterProps> = ({ chainId, toggleTheme, isDark, bananaPriceUsd, switchNetwork }) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
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
            <StyledButton variant="text" onClick={() => toggleTheme(!isDark)}>
              {/* alignItems center is a Safari fix */}
              <Flex alignItems="center">
                <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
                <Text color="textDisabled" mx="4px" bold>
                  /
                </Text>
                <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
              </Flex>
            </StyledButton>
            <NetworkButton chainId={chainId} switchNetwork={switchNetwork} />
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
        </LogoFlex>
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
          <LinkColumnFlex style={{ width: "200px" }}>
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
      </FlexContainer>
      <PeakingMonkey />
    </Container>
  );
};

export default Footer;
