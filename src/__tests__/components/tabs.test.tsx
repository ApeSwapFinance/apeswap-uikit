import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Tabs from "../../components/Tabs/Tab";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <Tabs index={0} label="Tab" onClick={() => <></>} size="md" variant="centered">
      Tabs
    </Tabs>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1aoopwd"
      >
        <span
          class="css-xogzuj"
        >
          Tab
        </span>
      </div>
    </DocumentFragment>
  `);
});
