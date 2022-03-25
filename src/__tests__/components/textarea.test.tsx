import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Textarea } from "../../components/Textarea";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Textarea />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <textarea
        class="css-iyqgnx"
      />
    </DocumentFragment>
  `);
});
