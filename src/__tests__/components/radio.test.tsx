import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Radio from "../../components/Radio/Radio";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Radio name="radio" value="1" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="css-xaw09b-Radio"
      >
        <input
          class="css-1p8bwfy-Radio"
          name="radio"
          type="radio"
          value="1"
        />
        <span
          class="css-1837bog-Radio"
        />
      </span>
    </DocumentFragment>
  `);
});
