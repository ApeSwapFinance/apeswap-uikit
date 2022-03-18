import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Skeleton from "../../components/Skeleton/Skeleton";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Skeleton />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1fbhkvh"
      />
    </DocumentFragment>
  `);
});

it("renders correctly avatar", () => {
  const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} variant="rect" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-5g2tsz"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `);
});

it("renders correctly block", () => {
  const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} animation="waves" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-12vhck7"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `);
});
