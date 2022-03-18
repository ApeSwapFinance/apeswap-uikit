import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Heading } from "../../components/Heading";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Heading as="h1">Heading</Heading>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h1
        class="css-1k7yu1x"
      >
        Heading
      </h1>
    </DocumentFragment>
  `);
});
