import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Card } from "../../components/Card";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Card>Card</Card>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-4o55p0"
      >
        Card
      </div>
    </DocumentFragment>
  `);
});
