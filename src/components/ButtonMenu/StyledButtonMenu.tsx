import styled, { DefaultTheme } from "styled-components";
import { variants, variantProps } from "../Button/types";

type StyledButtonMenuProps = {
  variant: variantProps | string;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SECONDARY ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
