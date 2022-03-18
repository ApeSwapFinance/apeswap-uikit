import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Divider from "../../components/Divider/Divider";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Divider />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <hr
        class="css-7xw2cm"
      />
    </DocumentFragment>
  `);
});
