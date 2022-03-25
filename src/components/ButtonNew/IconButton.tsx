import React from "react";
import { Button } from "theme-ui";
import { Svg } from "../Svg";
import { icons } from "../Svg/types";
import { IconButtonProps, iconButtonVariants as variants } from "./types";
import style from "./styles";
import colorValues from "../../theme/Apeswap/types";

const IconButton: React.FC<IconButtonProps> = ({
  icon = icons.SEND,
  color = colorValues.white1,
  background = colorValues.yellow,
  variant = variants.PRIMARY,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={{
        variant: `buttons.${variant}`,
        background,
        ...(variant === variants.PRIMARY ? style.primary : {}),
        ...(variant === variants.TRANSPARENT ? style.transparent : {}),
      }}
    >
      {children || <Svg color={color} icon={icon} {...props} />}
    </Button>
  );
};

export default IconButton;
