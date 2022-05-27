import React from "react";
import { Card as ThemeUICard } from "theme-ui";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, background, ...props }) => {
  return (
    <ThemeUICard {...props} sx={{ variant: `cards.primary`, background }}>
      {children}
    </ThemeUICard>
  );
};

export default Card;
