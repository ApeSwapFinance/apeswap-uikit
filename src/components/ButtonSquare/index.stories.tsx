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
      {Object.values(variants).map((variant) => (
        <Row key={variant}>
          <ButtonSquare variant={variant}>{capitalize(variant)}</ButtonSquare>
          <ButtonSquare variant={variant} disabled>
            Disabled
          </ButtonSquare>
          <ButtonSquare variant={variant} size="sm">
            Small
          </ButtonSquare>
        </Row>
      ))}
    </>
  );
};

export const Variants: React.FC = () => {
  return (
    <BrowserRouter>
      <Row>
        <ButtonSquare as="a" href="https://pancakeswap.finance" target="_blank" rel="noreferrer">
          As an anchor
        </ButtonSquare>
        <ButtonSquare as={Link} to="/router-link" variant="secondary">
          As an React Router link
        </ButtonSquare>
        <ButtonSquare as="a" href="https://pancakeswap.finance" disabled>
          As an anchor (disabled)
        </ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare fullWidth>Full size</ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare isLoading endIcon={<AutoRenewIcon spin color="currentColor" />}>
          Approving
        </ButtonSquare>
        <ButtonSquare isLoading variant="success">
          Approving
        </ButtonSquare>
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
        <IconButtonSquare variant="secondary">
          <AddIcon />
        </IconButtonSquare>
      </Row>
      <Row>
        <IconButtonSquare size="sm" variant="danger">
          <LogoIcon />
        </IconButtonSquare>
        <IconButtonSquare size="sm" variant="success">
          <AddIcon />
        </IconButtonSquare>
      </Row>
    </BrowserRouter>
  );
};
