import React from "react";
import { renderWithTheme } from "../../testHelpers";
import TooltipBubble from "../../components/TooltipBubble/TooltipBubble";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<TooltipBubble body={<></>}>Tooltip</TooltipBubble>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-14rwn71"
      >
        <div
          class="css-tcu21u"
        >
          <div
            class="css-14aebwp"
          />
        </div>
        Tooltip
      </div>
    </DocumentFragment>
  `);
});
