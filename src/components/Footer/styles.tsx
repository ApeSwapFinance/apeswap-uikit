import styled from "styled-components";
import { MobileIcon } from "../../widgets/Navbar/icons";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { Text } from "../Text";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => (theme.isDark ? theme.colors.background : "rgba(77, 64, 64, 1)")};
  flex-wrap: wrap;
  width: 250px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 335px;
    align-items: center;
    justify-content: center;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 700px;
    align-items: center;
    justify-content: center;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 1200px;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => (theme.isDark ? theme.colors.background : "rgba(77, 64, 64, 1)")};
  border-top: 5px solid ${({ theme }) => theme.colors.white3};
  padding: 20px 20px 20px 20px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: -1;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 80px 50px 80px 50px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 80px 50px 100px 50px;
  }
`;

export const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.white3};
  border-radius: 10px;
  font-size: 14px;
  line-height: 10px;
  padding: 0px 15px 0px 10px;
  :focus {
    box-shadow: none !important;
  }
`;

export const PeakingMonkey = styled(MobileIcon)`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: -40px;
  right: 0px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 150px;
    height: 150px;
    bottom: -60px;
    right: 0px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 200px;
    height: 200px;
    bottom: -80px;
    right: 0px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 300px;
    height: 300px;
    bottom: -120px;
    right: 50px;
  }
`;

export const IconFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xs} {
    justify-content: space-between;
    height: 100px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;
    height: 60px;
  }
`;

export const LinkskWrapper = styled(Flex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin-bottom: 100px;
    margin-top: 50px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 100px;
    margin-top: 50px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 0px;
    margin-top: 50px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const LinkColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-start;
    margin-bottom: 0px;
  }
`;

export const LogoFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 475px;
  width: 100%;
  text-align: center;
  padding: 0px 5px 0px 5px;
  ${({ theme }) => theme.mediaQueries.xs} {
    height: 375px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 400px;
    width: 375px;
    align-items: center;
    padding: 0px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 375px;
    width: 375px;
    text-align: left;
    align-items: flex-start;
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 60px;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    justify-content: flex-start;
    height: 60px;
  }
`;

export const LinkText = styled(Text)`
  margin-top: 15px;
  margin-bottom: 5px;
  color: white;
  :hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled.a`
  :hover {
    opacity: 0.8;
  }
`;

export const BottomRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: space-between;
`;

export const BuyBananaButton = styled.button`
  border: 3px solid #ffb300;
  color: #ffb300;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  height: 35px;
  width: 180px;
  background-color: rgb(0, 0, 0, 0);
  :hover {
    border: 3px solid #ffce00;
  }
`;

export const Dropdown = styled.div<{ border?: boolean }>`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ border }) => border && "1px solid white"};
  width: 100%;
  padding: 10px 10px;
  cursor: pointer;
`;

export const AllRightsReserved = styled(Text)`
  position: absolute;
  color: white;
  bottom: 10px;
  left: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    bottom: 20px;
    left: auto;
  }
`;
