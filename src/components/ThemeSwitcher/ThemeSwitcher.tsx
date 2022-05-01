import React from "react";
import { Text } from "../Text";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { IslandIcon, MoonIcon } from "../../widgets/Navbar/icons";
import { ThemeSwitcherProps } from "./types";

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, isDark, isMini }) => {
  return (
    <Button
      sx={{
        background: "white3",
        padding: isMini ? "8px" : "3px 12px",
        marginRight: isMini && "20px",
        height: "35px",
        border: "none",
        ".island": {
          fill: isDark ? "gray" : "brown",
        },
        ".moon": {
          fill: isDark ? "gray" : "primaryGray",
        },
        "&:hover": {
          background: "white3",
        },
      }}
      variant="tertiary"
      onClick={() => toggleTheme(!isDark)}
      isMini={isMini}
    >
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        {!isMini && (
          <>
            <IslandIcon width="20px" id="islandMode" />
            <Text
              sx={{
                color: isDark ? "gray" : "brown"
              }}
              mx="4px"
            >
              /
            </Text>
          </>
        )}
        <MoonIcon width="24px" id="nightMode" />
      </Flex>
    </Button>
  );
};

export default ThemeSwitcher;
