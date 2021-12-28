import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Skeleton from "../../components/Skeleton/Skeleton";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Skeleton />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBQB sc-gsTEea iFtJWq hoeBWj"
      />
    </DocumentFragment>
  `);
});

it("renders correctly avatar", () => {
  const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} variant="circle" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBQB sc-gsTEea gVsNpj hoeBWj"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `);
});

it("renders correctly waves animation", () => {
  const { asFragment } = renderWithTheme(<Skeleton width={50} height={50} animation="waves" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBQB sc-dlfnuX kqwUgb bKGCvk"
        height="50"
        width="50"
      />
    </DocumentFragment>
  `);
});
