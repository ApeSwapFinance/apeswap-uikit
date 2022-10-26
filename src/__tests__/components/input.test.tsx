import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Input from "../../components/Input/Input";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Input type="text" value="input" onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-r8xm40"
      >
        <input
          class="css-1spk4n4"
          type="text"
          value="input"
        />
      </div>
    </DocumentFragment>
  `);
});
