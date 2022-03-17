import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dkPtRN hbySbf"
      >
        <input
          checked=""
          class="sc-gsDKAQ hSJhvP"
          type="checkbox"
        />
        <div
          class="sc-bdvvtL eKVubR"
        />
      </div>
    </DocumentFragment>
  `);
});
