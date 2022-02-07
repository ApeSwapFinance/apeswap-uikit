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
          class="css-1bzb8nq"
        >
          body
        </div>
        <div
          class="css-1bzb8nq"
        />
      </div>
    </DocumentFragment>
  `);
});
