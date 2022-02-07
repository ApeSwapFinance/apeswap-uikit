import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Switch from "../../components/Switch/Switch";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Switch checked={false} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1g78am3"
      >
        <button
          class="css-1qanie7"
        >
          Switch
        </button>
        <button
          class="css-1lywym5"
        >
          Switch
        </button>
      </div>
    </DocumentFragment>
  `);
});
