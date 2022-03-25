import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Table from "../../components/Table/Table";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <Table>
      <></>
    </Table>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <table
        class="css-4k6e2x-Table"
      />
    </DocumentFragment>
  `);
});
