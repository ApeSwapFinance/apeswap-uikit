import React from "react";
import { Box, useColorMode } from "theme-ui";
import { Svg } from "../Svg";
import { icons } from "../Svg/types";
import style from "./styles";

const ProfileIcon: React.FC = () => {
  const [colorMode] = useColorMode();
  return (
    <Box sx={style.container}>
      <Svg icon={colorMode === "light" ? icons.PROFILELIGHT : icons.PROFILEDARK} />
    </Box>
  );
};

export default ProfileIcon;
