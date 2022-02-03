import React from "react";
import { Box } from "theme-ui";
import { SkeletonProps, animation as ANIMATION, variant as VARIANT } from "./types";
import styles from "./styles";

const Skeleton: React.FC<SkeletonProps> = ({ variant = VARIANT.RECT, animation = ANIMATION.PULSE, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        ...(animation === ANIMATION.WAVES ? styles.waves : styles.pulse),
        height: props.height,
        width: props.width,
        borderRadius: variant === VARIANT.RECT ? "10px" : "50%",
      }}
    />
  );
};

export default Skeleton;
