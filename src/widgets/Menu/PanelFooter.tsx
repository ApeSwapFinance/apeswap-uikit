import React from "react";
import styled from "styled-components";
import { ApeSwapRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
import { useMatchBreakpoints } from "../../hooks";

interface Props extends PanelProps, PushedProps {}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
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

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  bananaPriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  const { isSm, isXs } = useMatchBreakpoints();
  const isTrueMobile = isSm || isXs === true;
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="transparent" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        {!isTrueMobile && (
          <div>
            {bananaPriceUsd ? (
              <PriceLink
                href="https://info.apeswap.finance/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"
                target="_blank"
              >
                <ApeSwapRoundIcon width="24px" mr="8px" />
                <Text color="text" bold>{`$${bananaPriceUsd.toFixed(3)}`}</Text>
              </PriceLink>
            ) : (
              <Skeleton width={80} height={24} />
            )}
          </div>
        )}
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "text", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "12px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" component={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="text">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
      </SocialEntry>
      <SettingsEntry>
        <Button variant="primary" onClick={() => toggleTheme(!isDark)}>
          {/* alignItems center is a Safari fix */}
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
            <Text color="textDisabled" mx="4px" bold>
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
          </Flex>
        </Button>
        {langs && (
          <Dropdown
            position="top-right"
            component={
              <Button variant="primary" startIcon={<LanguageIcon color="text" width="24px" />}>
                <Text color="text" bold>
                  {currentLang?.toUpperCase()}
                </Text>
              </Button>
            }
          >
            {langs.map((lang) => (
              <MenuButton
                key={lang.code}
                color="text"
                fullWidth
                onClick={() => setLang(lang)}
                // Safari fix
                style={{ minHeight: "32px", height: "auto" }}
              >
                {lang.language}
              </MenuButton>
            ))}
          </Dropdown>
        )}
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
