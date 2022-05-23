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
import styles, {
  FlexContainer,
  Container,
  PeakingMonkey,
  PriceLink,
  IconFlex,
  LinkskWrapper,
  LinkColumnFlex,
  LogoFlex,
  ButtonFlex,
  StyledLink,
  BuyBananaButton,
  BottomRowContainer,
} from "./styles";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";
import lightTheme from "../../theme/light";
import darkTheme from "../../theme/dark";
import { ThemeSwitcher } from "../ThemeSwitcher";
import MobileLinks from "./MobileLinks";
import trackSocialClick from "../../util/trackSocialClick";
import { RunFiatButton } from "../RunFiatButton";
import { Colors } from "../../theme/types";
import { darkColors } from "../../theme";
import LangSelector from "../LangSelector/LangSelector";

const Footer: React.FC<FooterProps> = ({
  chainId,
  toggleTheme,
  isDark,
  bananaPriceUsd,
  switchNetwork,
  track,
  runFiat,
  currentLang,
  langs,
  setLang,
  t,
}) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const { isXxl, isLg, isXl } = useMatchBreakpoints();
  const isMobile = isXxl === false && isXl === false && isLg === false;
  const label = "Footer";

  return (
    <Container>
      <FlexContainer>
        <LogoFlex>
          <FullLogo width="240px" mb="20px" />
          <Text color="primaryBright" size="16px">
            {t(
              `ApeSwap is a DeFi Hub on BNB Chain & Polygon focused on offering an accessible, transparent and secure experience for everyone.`
            )}
          </Text>
          <ButtonFlex>
            <ThemeSwitcher toggleTheme={toggleTheme} isDark={isDark} isMini={false} />
            <NetworkButton chainId={chainId} switchNetwork={switchNetwork} t={t} />
            <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
          </ButtonFlex>
          <IconFlex>
            <StyledLink href="https://twitter.com/ape_swap" target="_blank" rel="noopener noreferrer">
              <TwitterIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "twitter", label, "https://twitter.com/ape_swap", chainId)}
              />
            </StyledLink>
            <StyledLink href="https://discord.com/invite/ApeSwap" target="_blank" rel="noopener noreferrer">
              <DiscordIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "discord", label, "https://discord.com/invite/ApeSwap", chainId)}
              />
            </StyledLink>
            <StyledLink href="https://t.me/ape_swap" target="_blank" rel="noopener noreferrer">
              <TelegramIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "telegram", label, "https://t.me/ape_swap", chainId)}
              />
            </StyledLink>
            <StyledLink href="https://www.reddit.com/r/Apeswap/" target="_blank" rel="noopener noreferrer">
              <RedditIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "reddit", label, "https://www.reddit.com/r/Apeswap/", chainId)}
              />
            </StyledLink>
            <StyledLink href="https://ape-swap.medium.com/" target="_blank" rel="noopener noreferrer">
              <MediumIcon
                color="white3"
                fill={iconFillColor}
                onClick={() => trackSocialClick(track, "medium", label, "https://ape-swap.medium.com/", chainId)}
              />
            </StyledLink>
            <StyledLink href="https://www.instagram.com/apeswap.finance/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon
                color="white3"
                fill={iconFillColor}
                onClick={() =>
                  trackSocialClick(track, "instagram", label, "https://www.instagram.com/apeswap.finance/", chainId)
                }
              />
            </StyledLink>
          </IconFlex>
          <BottomRowContainer>
            <div style={{ marginRight: "21px" }}>
              {bananaPriceUsd ? (
                <PriceLink
                  href="https://info.apeswap.finance/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"
                  target="_blank"
                >
                  <ApeSwapRoundIcon width="34px" mr="8px" />
                  <Text color="primaryBright" size="18px" weight={600}>{`$${bananaPriceUsd.toFixed(3)}`}</Text>
                </PriceLink>
              ) : (
                <Skeleton width={90} height={35} />
              )}
            </div>
            <a href="https://apeswap.finance/swap" target="_blank" rel="noopener noreferrer">
              <BuyBananaButton>{t("BUY BANANA")}</BuyBananaButton>
            </a>
            {/* <RunFiatButton runFiat={runFiat} t={t} /> */}
          </BottomRowContainer>
        </LogoFlex>
        {isMobile ? (
          <MobileLinks />
        ) : (
          <LinkskWrapper>
            <LinkColumnFlex style={{ width: "200px" }}>
              <Text
                sx={{
                  lineHeight: 1.5,
                }}
                size="22px"
                weight="bold"
                color="yellow"
              >
                {t("Support")}
              </Text>
              {supportLinks.map((link) => {
                return (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Text sx={styles.linkText} size="16px" weight={400} color="primaryBright">
                      {t(link.label)}
                    </Text>
                  </a>
                );
              })}
            </LinkColumnFlex>
            <LinkColumnFlex style={{ width: "240px" }}>
              <Text
                sx={{
                  lineHeight: 1.5,
                }}
                size="22px"
                weight="bold"
                color="yellow"
              >
                {t("Engage")}
              </Text>
              {engageLinks.map((link) => {
                return (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Text sx={styles.linkText} size="16px" weight={400} color="primaryBright">
                      {t(link.label)}
                    </Text>
                  </a>
                );
              })}
            </LinkColumnFlex>
            <LinkColumnFlex style={{ width: "130px" }}>
              <Text
                sx={{
                  lineHeight: 1.5,
                }}
                size="22px"
                weight="bold"
                color="yellow"
              >
                {t("Learn")}
              </Text>
              {learnLinks.map((link) => {
                return (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Text sx={styles.linkText} size="16px" weight={400} color="primaryBright">
                      {t(link.label)}
                    </Text>
                  </a>
                );
              })}
            </LinkColumnFlex>
          </LinkskWrapper>
        )}
      </FlexContainer>
      <PeakingMonkey />
      {/* <AllRightsReserved>©2022 All rights reserved</AllRightsReserved> */}
      <Text sx={styles.allRightsReserved}>{t("©2022 All rights reserved")}</Text>
    </Container>
  );
};

export default Footer;
