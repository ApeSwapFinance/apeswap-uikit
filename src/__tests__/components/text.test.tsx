import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Text } from "../../components/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>Text</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="css-18xsidq"
      >
        Text
      </span>
    </DocumentFragment>
  `);
});
