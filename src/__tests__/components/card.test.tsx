import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Card, CardBody, CardHeader, CardFooter } from "../../components/Card";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <Card>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ dFGPUI"
      >
        <div
          class="sc-dlfnbm bwJRqk"
        >
          Header
        </div>
        <div
          class="sc-gsTCUz iMfsSF"
        >
          Body
        </div>
        <div
          class="sc-hKgILt itqiIH"
        >
          Footer
        </div>
      </div>
    </DocumentFragment>
  `);
});
