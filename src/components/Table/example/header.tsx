import styled from "styled-components";

const StyledTh = styled.th`
  background: ${({ theme }) => theme.colors.backgroundDisabled};
  padding: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-left: 16px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-right: 16px;
  }
`;

export default StyledTh;
