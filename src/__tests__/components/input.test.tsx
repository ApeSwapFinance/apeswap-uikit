import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Input from "../../components/Input/Input";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Input type="text" value="input" onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1vb0zbs-Input"
      >
        <input
          class="css-a0y6z0-Input"
          type="text"
          value="input"
        />
      </div>
    </DocumentFragment>
  `);
});
