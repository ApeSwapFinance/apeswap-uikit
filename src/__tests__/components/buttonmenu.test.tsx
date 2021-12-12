import React from "react";
import { renderWithTheme } from "../../testHelpers";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import ButtonMenuItem from "../../components/ButtonMenu/ButtonMenuItem";

const handleClick = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <ButtonMenu activeIndex={0} onClick={handleClick}>
      <ButtonMenuItem>Item 1</ButtonMenuItem>
      <ButtonMenuItem>Item 2</ButtonMenuItem>
    </ButtonMenu>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBQB ekFJNm"
      >
        <button
          class="sc-gsTEea ksdvNL"
          type="button"
        >
          Item 1
        </button>
        <button
          class="sc-gsTEea gFYYir sc-dlfnuX dDXqlA"
          type="button"
        >
          Item 2
        </button>
      </div>
    </DocumentFragment>
  `);
});
