import React from "react";
import noop from "lodash/noop";
import { renderWithTheme } from "../../testHelpers";
import { Modal } from "../../widgets/Modal";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Modal>body</Modal>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-vurnku"
      >
        <div
          class="css-bwl3l-Modal"
          style="opacity: 0; transform: translate(-50%, -50%) scale(0.1);"
        >
          body
        </div>
        <div
          class="css-1hmwv4n-Modal css-vurnku"
        />
      </div>
    </DocumentFragment>
  `);
});
