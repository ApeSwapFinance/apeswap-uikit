import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Text } from "../../components/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>Text</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdvvtL foxtoM"
        color="text"
      >
        Text
      </div>
    </DocumentFragment>
  `);
});
