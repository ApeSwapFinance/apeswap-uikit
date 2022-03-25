import React from "react";
import { Card as ThemeUICard } from "theme-ui";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, background, sx, ...props }) => {
  return (
    <ThemeUICard {...props} sx={{ ...sx, variant: `cards.primary`, background }}>
      {children}
    </ThemeUICard>
  );
};

export default Card;
