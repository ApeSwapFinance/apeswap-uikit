import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Progress from "../../components/Progress/Progress";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Progress />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-4wbk4y-Progress"
      >
        <div
          class="css-16dgj95-Progress"
        />
      </div>
    </DocumentFragment>
  `);
});
