import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Card } from "../../components/Card";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Card>Card</Card>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-vurnku"
      >
        Card
      </div>
    </DocumentFragment>
  `);
});
