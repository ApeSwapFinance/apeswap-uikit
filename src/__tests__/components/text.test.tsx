import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Text } from "../../components/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>Text</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="css-1ciuxd4"
      >
        Text
      </span>
    </DocumentFragment>
  `);
});
