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
        class="sc-bdfBQB lavGGE"
      >
        <div
          class="sc-dlfnuX cJqRVD"
        >
          Header
        </div>
        <div
          class="sc-gsTEea gfHbbF"
        >
          Body
        </div>
        <div
          class="sc-hKgJUU jnajPp"
        >
          Footer
        </div>
      </div>
    </DocumentFragment>
  `);
});
