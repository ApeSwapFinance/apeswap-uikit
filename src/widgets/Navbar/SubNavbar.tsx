import React from "react";
import styled from "styled-components";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "./icons";
import { Flex } from "../../components/Flex";
import { Text } from "../../components/Text";
import * as ImageModule from "./images";
import MenuLink from "./MenuLink";
import { MenuSubEntry } from "./types";
import darkTheme from "../../theme/dark";
import lightTheme from "../../theme/light";
import trackSocialClick, { TrackHandler } from "../../util/trackSocialClick";

const Icons = ImageModule as unknown as { [key: string]: React.FC };

interface SubNavbarProps {
  items: MenuSubEntry[];
  image?: string;
  label: string;
  isDark: boolean;
  chainId: number | string;
  track?: TrackHandler | undefined;
}
const StyledLink = styled.a`
  :hover {
    opacity: 0.8;
  }
`;

const StyledCard = styled.div`
  position: absolute;
  width: 429px;
  min-height: 316px;
  background-color: ${({ theme }) => theme.colors.navbar};
  border-radius: 0px 0px 30px 30px;
  padding: 15px 0px 20px 0px;
  margin-left: 22.5px;
  cursor: default;
`;

const NavHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 200px;
  margin: 0px 0px 0px 30px;
`;

const NavImage = styled.div`
  position: absolute;
  display: block;
  top: 0px;
  right: 0px;
  border-radius: 0px 0px 0px 30px;
`;

const StyledText = styled(Text)`
  margin-top: 6px;
  margin-bottom: 6px;
  font-weight: 700;
  :hover {
    box-shadow: ${({ theme }) => `0px 2px 0px ${theme.colors.text}`};
  }
`;

const SubNavbar: React.FC<SubNavbarProps> = ({ items, image, label, isDark, chainId, track }) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const Image = Icons[image || ""];
  const imageElement = <Image />;

  return (
    <StyledCard key={1}>
      <NavHolder>
        {items.map((item) => {
          return (
            <MenuLink href={item.href} target={label === "More" ? "_blank" : ""}>
              <StyledText>{item.label}</StyledText>
            </MenuLink>
          );
        })}
      </NavHolder>
      <NavImage>{imageElement}</NavImage>
      {label === "More" && (
        <Flex
          justifyContent="space-between"
          style={{ position: "absolute", bottom: "5px", right: "20px", width: "150px" }}
        >
          <StyledLink href="https://twitter.com/ape_swap" target="_blank" rel="noopener noreferrer">
            <TwitterIcon
              color="white3"
              fill={iconFillColor}
              onClick={() => trackSocialClick(track, "twitter", label, "https://twitter.com/ape_swap", chainId)}
            />
          </StyledLink>
          <StyledLink href="https://t.me/ape_swap" target="_blank" rel="noopener noreferrer">
            <TelegramIcon
              color="white3"
              fill={iconFillColor}
              onClick={() => trackSocialClick(track, "telegram", label, "https://t.me/ape_swap", chainId)}
            />
          </StyledLink>
          <StyledLink href="https://discord.com/invite/ApeSwap" target="_blank" rel="noopener noreferrer">
            <DiscordIcon
              color="white3"
              fill={iconFillColor}
              onClick={() => trackSocialClick(track, "discord", label, "https://discord.com/invite/ApeSwap", chainId)}
            />
          </StyledLink>
        </Flex>
      )}
    </StyledCard>
  );
};

SubNavbar.defaultProps = {
  image: "",
  track: undefined,
};

export default SubNavbar;
