import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>apeswap</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdvvtL foxtoM"
        color="text"
      >
        apeswap
      </div>
    </DocumentFragment>
  `);
});
