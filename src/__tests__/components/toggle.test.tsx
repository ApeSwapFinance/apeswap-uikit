import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlfnuX evNIql"
      >
        <input
          checked=""
          class="sc-gsTEea juHXKA"
          type="checkbox"
        />
        <div
          class="sc-bdfBQB thdVX"
        />
      </div>
    </DocumentFragment>
  `);
});
