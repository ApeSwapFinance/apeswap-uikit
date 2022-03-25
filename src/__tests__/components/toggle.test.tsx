import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} labels={["Switch1", "Switch2"]} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-5ugn73-Toggle css-vurnku"
      >
        <div
          class="css-1fooroe-Toggle css-vurnku"
        >
          <div
            class="sc-bczRLJ iPittn css-1fbfh1p-Toggle"
            color="text"
          >
            Switch1
          </div>
        </div>
        <div
          class="css-1fooroe-Toggle css-vurnku"
        >
          <div
            class="sc-bczRLJ iPittn css-1fbfh1p-Toggle"
            color="text"
          >
            Switch2
          </div>
        </div>
        <button
          class="css-1rrxyy3"
        >
          Switch2
        </button>
        <input
          aria-hidden="true"
          checked=""
          class="css-1hokic7-Toggle"
          tabindex="-1"
          type="checkbox"
        />
      </div>
    </DocumentFragment>
  `);
});
