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
            class="css-1d82qvs"
          />
        </div>
        <span
          class="css-vurnku"
        >
          Tooltip
        </span>
      </span>
    </DocumentFragment>
  `);
});
