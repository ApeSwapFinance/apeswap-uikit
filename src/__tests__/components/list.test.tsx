import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { List } from "../../components/List";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<List />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <ul
        class="css-girak2-List"
      />
    </DocumentFragment>
  `);
});
