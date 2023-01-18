/** @jsxImportSource theme-ui */
import React from "react";
import { Link } from "theme-ui";
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
  BottomRowContainer,
} from "./styles";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";
import lightTheme from "../../theme/light";
import darkTheme from "../../theme/dark";
import { ThemeSwitcher } from "../ThemeSwitcher";
import MobileLinks from "./MobileLinks";
import trackClick from "../../util/trackClick";
import { RunFiatButton } from "../RunFiatButton";
import LangSelector from "../LangSelector/LangSelector";
import { Flex } from "../Flex";

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
  const position = "Footer";
  const event = "socialClick";

  return (
    <>
      <Container>
        <FlexContainer>
          <LogoFlex>
            <FullLogo width="240px" mb="20px" />
            <Text color="primaryBright" size="16px">
              {t(
                `ApeSwap is a multichain DeFi Hub offering an accessible, transparent, and secure experience for everyone.`
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
                  onClick={() => trackClick(track, event, position, chainId, "twitter", "https://twitter.com/ape_swap")}
                />
              </StyledLink>
              <StyledLink href="https://apeswap.click/discord" target="_blank" rel="noopener noreferrer">
                <DiscordIcon
                  color="white3"
                  fill={iconFillColor}
                  onClick={() =>
                    trackClick(track, event, position, chainId, "discord", "https://apeswap.click/discord")
                  }
                />
              </StyledLink>
              <StyledLink href="https://t.me/ape_swap" target="_blank" rel="noopener noreferrer">
                <TelegramIcon
                  color="white3"
                  fill={iconFillColor}
                  onClick={() => trackClick(track, event, position, chainId, "telegram", "https://t.me/ape_swap")}
                />
              </StyledLink>
              <StyledLink href="https://www.reddit.com/r/Apeswap/" target="_blank" rel="noopener noreferrer">
                <RedditIcon
                  color="white3"
                  fill={iconFillColor}
                  onClick={() =>
                    trackClick(track, event, position, chainId, "reddit", "https://www.reddit.com/r/Apeswap/")
                  }
                />
              </StyledLink>
              <StyledLink href="https://ape-swap.medium.com/" target="_blank" rel="noopener noreferrer">
                <MediumIcon
                  color="white3"
                  fill={iconFillColor}
                  onClick={() => trackClick(track, event, position, chainId, "medium", "https://ape-swap.medium.com/")}
                />
              </StyledLink>
              <StyledLink href="https://www.instagram.com/apeswap.finance/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon
                  color="white3"
                  fill={iconFillColor}
                  onClick={() =>
                    trackClick(
                      track,
                      event,
                      position,
                      chainId,
                      "instagram",
                      "https://www.instagram.com/apeswap.finance/"
                    )
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
              <RunFiatButton runFiat={runFiat} t={t} track={track} position={position} chainId={chainId} />
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
                  {t("Access")}
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
        <Flex
          sx={{
            position: "absolute",
            flexDirection: "column",
            bottom: "10px",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            width: "fit-content",
            left: ["10px", "auto"],
          }}
        >
          <Text color="primaryBright">{t(`©${new Date().getFullYear()} All rights reserved`)}</Text>
          <Flex sx={{ alignItems: "center", width: "150px", justifyContent: "center" }}>
            <Link href="https://apeswap.finance/terms" target="_blank">
              <Text size="12px" color="primaryBright" sx={styles.linkText}>
                Terms
              </Text>
            </Link>
            <Text size="12px" color="primaryBright" margin="0px 10px">
              {" "}
              |{" "}
            </Text>
            <Link href="https://apeswap.finance/privacy" target="_blank">
              <Text size="12px" color="primaryBright" sx={styles.linkText}>
                Privacy Policy
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
