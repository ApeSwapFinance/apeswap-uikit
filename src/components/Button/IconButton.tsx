import React from "react";
import { Button } from "theme-ui";
import { IconSVG } from "../IconSVG";
import { icons } from "../IconSVG/types";
import { IconButtonProps, iconButtonVariants as variants } from "./types";
import style from "./styles";
import colorValues from "../../theme/Apeswap/types";

const IconButton: React.FC<IconButtonProps> = ({
  icon = icons.SEND,
  color = colorValues.white1,
  variant = variants.PRIMARY,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={variant === variants.TRANSPARENT ? style.transparent : { variant: `buttons.${variant}`, ...style.default }}
    >
      <IconSVG color={color} icon={icon} />
    </Button>
  );
};

export default IconButton;
