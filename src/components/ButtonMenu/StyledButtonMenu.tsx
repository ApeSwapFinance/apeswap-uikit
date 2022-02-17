import styled from "styled-components";
import { Variants } from "../Button/types";

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  background-color: ${({ theme }) => theme.colors.white3};
  border-radius: 16px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
