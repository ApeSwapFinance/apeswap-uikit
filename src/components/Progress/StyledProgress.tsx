import styled from "styled-components";

interface BarProps {
  primary?: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.primary ? "linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%)" : `${props.theme.colors.text}80`};
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  height: 16px;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

const StyledProgress = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white4};
  border-radius: 32px;
  height: 16px;
  overflow: hidden;
`;

export default StyledProgress;
