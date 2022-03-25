import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { IslandIcon, MoonIcon } from "../../widgets/Navbar/icons";
import { ThemeSwitcherProps } from "./types";

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white3};
  border-radius: 10px;
  padding: 3px 12px;
  height: 35px;

  .island {
    fill: ${({ theme }) => (theme.isDark ? theme.colors.gray : theme.colors.primary)};
  }

  .moon {
    fill: ${({ theme }) => (theme.isDark ? theme.colors.text : theme.colors.primaryGray)};
  }
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => (theme.isDark ? theme.colors.gray : theme.colors.primary)};
`;

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, isDark }) => {
  return (
    <StyledButton variant="tertiary" onClick={() => toggleTheme(!isDark)}>
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <IslandIcon width="20px" id="islandMode" />
        <StyledText mx="4px">/</StyledText>
        <MoonIcon width="24px" id="nightMode" />
      </Flex>
    </StyledButton>
  );
};

export default ThemeSwitcher;
