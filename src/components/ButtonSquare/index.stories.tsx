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
          <ButtonSquare variant={variant} fontFamily="Titan One">
            {capitalize(variant)}
          </ButtonSquare>
          <ButtonSquare variant={variant} fontFamily="Titan One" disabled>
            Disabled
          </ButtonSquare>
          <ButtonSquare variant={variant} fontFamily="Titan One" size="sm">
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
        <ButtonSquare as="a" href="https://apeswap.finance" target="_blank" rel="noreferrer" fontFamily="Titan One">
          As an anchor
        </ButtonSquare>
        <ButtonSquare as={Link} to="/router-link" variant="secondary" fontFamily="Titan One">
          As an React Router link
        </ButtonSquare>
        <ButtonSquare as="a" href="https://apeswap.finance" disabled fontFamily="Titan One">
          As an anchor (disabled)
        </ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare fullWidth fontFamily="Titan One">
          Full size
        </ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare isLoading endIcon={<AutoRenewIcon spin color="currentColor" />} fontFamily="Titan One">
          Approving
        </ButtonSquare>
        <ButtonSquare isLoading variant="success" fontFamily="Titan One">
          Approving
        </ButtonSquare>
      </Row>
      <Row>
        <ButtonSquare startIcon={<LogoIcon />} fontFamily="Titan One">
          Start Icon
        </ButtonSquare>
        <ButtonSquare endIcon={<LogoIcon />} fontFamily="Titan One">
          End Icon
        </ButtonSquare>
        <ButtonSquare startIcon={<LogoIcon />} endIcon={<LogoIcon />} fontFamily="Titan One">
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
