import React from "react";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import capitalize from "lodash/capitalize";
import Flex from "../Flex/Flex";
import { LogoIcon, AddIcon, AutoRenewIcon } from "../Svg";
import ButtonSquare from "./ButtonSquare";
import IconButtonSquare from "./IconButtonSquare";
import { variants } from "./types";

const Row = styled(Flex)`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/ButtonSquare",
  component: ButtonSquare,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      {/* {Object.values(variants).map((variant) => ( */}
      <Row>
        <ButtonSquare variant={variants.PRIMARY}>{capitalize(variants.PRIMARY)}</ButtonSquare>
        <ButtonSquare variant={variants.PRIMARY} disabled>
          Disabled
        </ButtonSquare>
        <ButtonSquare variant={variants.PRIMARY} size="sm">
          Small
        </ButtonSquare>
      </Row>
      {/* ))} */}
    </>
  );
};

export const Variants: React.FC = () => {
  return (
    <BrowserRouter>
      <Row>
        <ButtonSquare as="a" href="https://apeswap.finance" target="_blank" rel="noreferrer">
          As an anchor
        </ButtonSquare>
        <ButtonSquare as={Link} to="/router-link">
          As an React Router link
        </ButtonSquare>
        <ButtonSquare as="a" href="https://apeswap.finance" disabled>
          As an anchor (disabled)
        </ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare fullWidth variant="success">
          Success with Full size
        </ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare isLoading endIcon={<AutoRenewIcon spin color="currentColor" />}>
          Approving
        </ButtonSquare>
        <ButtonSquare isLoading>Approving</ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare startIcon={<LogoIcon />}>Start Icon</ButtonSquare>
        <ButtonSquare endIcon={<LogoIcon />}>End Icon</ButtonSquare>
        <ButtonSquare startIcon={<LogoIcon />} endIcon={<LogoIcon />}>
          Start & End Icon
        </ButtonSquare>
      </Row>
      <Row>
        <IconButtonSquare>
          <LogoIcon />
        </IconButtonSquare>
        <IconButtonSquare>
          <AddIcon />
        </IconButtonSquare>
      </Row>
      <Row>
        <IconButtonSquare size="sm">
          <LogoIcon />
        </IconButtonSquare>
        <IconButtonSquare size="sm">
          <AddIcon />
        </IconButtonSquare>
      </Row>
    </BrowserRouter>
  );
};
