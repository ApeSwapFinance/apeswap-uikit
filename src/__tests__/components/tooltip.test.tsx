import React from "react";
import { renderWithTheme } from "../../testHelpers";
import TooltipBubble from "../../components/TooltipBubble/TooltipBubble";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<TooltipBubble body={<></>}>Tooltip</TooltipBubble>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="css-1qnff7c"
      >
        <div
          class="css-140ll04"
        >
          <div
            class="css-17zq5c0"
          />
        </div>
        <div
          class="css-r8xm40"
        >
          Tooltip
        </div>
      </span>
    </DocumentFragment>
  `);
});
