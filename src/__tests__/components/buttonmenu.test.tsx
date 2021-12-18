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
        class="sc-bdvvtL jiXccD"
      >
        <button
          class="sc-gsDKAQ gWSpMb"
          type="button"
        >
          Item 1
        </button>
        <button
          class="sc-gsDKAQ kMVFnf sc-dkPtRN iTFqBY"
          type="button"
        >
          Item 2
        </button>
      </div>
    </DocumentFragment>
  `);
});
