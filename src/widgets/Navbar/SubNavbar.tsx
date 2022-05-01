import React from "react";
import { Box } from "theme-ui";
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
import { Tag } from "../../components/Tag";
import styles from "./styles"

const Icons = ImageModule as unknown as { [key: string]: React.FC };

interface SubNavbarProps {
  items: MenuSubEntry[];
  image?: string;
  label: string;
  isDark: boolean;
  chainId: number | string;
  track?: TrackHandler | undefined;
  subMenu?: {
    id: number;
    tag: string;
    navItem: string;
  }[];
}
const StyledLink = styled.a`
  :hover {
    opacity: 0.8;
  }
`;

// const StyledText = styled(Text)<{ label?: string }>`
//   margin-top: 6px;
//   margin-bottom: 6px;
//   margin-right: 6px;
//   font-weight: 700;

//   background: ${({ label }) => label === "GNANA" && "linear-gradient(53.53deg, #A16552 15.88%, #E1B242 92.56%)"};
//   -webkit-background-clip: ${({ label }) => label === "GNANA" && "text"};
//   -webkit-text-fill-color: ${({ label }) => label === "GNANA" && "transparent"};
//   background-clip: ${({ label }) => label === "GNANA" && "text"};
//   text-fill-color: ${({ label }) => label === "GNANA" && "transparent"};

//   :hover {
//     box-shadow: ${({ theme }) => `0px 2px 0px ${theme.colors.text}`};
//   }
// `;


const NewMenuLink = styled(MenuLink)`
  display: flex;
  align-items: center;
  background: "red";
`;

const StyledTag = styled(Tag)`
  font-size: 10px;
  padding: 0px 6px !important;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  height: auto;
`;

const SubNavbar: React.FC<SubNavbarProps> = ({ items, image, label, isDark, chainId, track, subMenu }) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const Image = Icons[image || ""];
  const imageElement = <Image />;

  return (
    <Box sx={styles.cardContainer} key={1}>
      <Box sx={styles.navHolder}>
        {items.map((item) => {
          const found = subMenu?.find((menu) => menu.navItem === item.label);
          return (
            <NewMenuLink href={item.href} target={label === "More" ? "_blank" : "_parent"}>
              <Text
                sx={{
                  ...styles.dropDownMenuText,
                  "&:hover": {
                    boxShadow: `0px 2px 0px ${iconFillColor}`,
                  },
                }}
                weight="bold"
                size="normal"
                label={item.label}
              >
                {item.label}
              </Text>
              {(item?.isNew || found?.tag === "LIVE") && (
                <StyledTag variant={found?.tag === "LIVE" ? "success" : "binance"}>
                  {found?.tag === "LIVE" ? "LIVE" : "NEW"}
                </StyledTag>
              )}
            </NewMenuLink>
          );
        })}
      </Box>
      <Box sx={styles.navImage}>{imageElement}</Box>
      {label === "More" && (
        <Flex
          sx={{
            justifyContent: "space-between",
            position: "absolute",
            bottom: "5px",
            right: "20px",
            width: "150px",
          }}
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
    </Box>
  );
};

SubNavbar.defaultProps = {
  image: "",
  track: undefined,
  subMenu: undefined,
};

export default SubNavbar;
