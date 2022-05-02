import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Link, LinkExternal } from "../../components/Link";

it("renders link correctly", () => {
  const { asFragment } = renderWithTheme(<Link href="https://apeswap.finance">Link</Link>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        class="sc-gsTEea dUuGld"
        color="primary"
        href="https://apeswap.finance"
      >
        Link
      </a>
    </DocumentFragment>
  `);
});

it("renders link external link correctly", () => {
  const { asFragment } = renderWithTheme(<LinkExternal href="https://apeswap.finance">Link</LinkExternal>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <a
        class="css-dovavb"
        href="https://apeswap.finance"
        target="_blank"
      >
        Link
        <span
          class="css-whwon5"
        >
          <svg
            class="css-15ebd6j-External"
            fill="none"
            viewBox="0 0 11 12"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16667 10.2778H1.83333C1.49722 10.2778 1.22222 10.0028 1.22222 9.66667V2.33333C1.22222 1.99722 1.49722 1.72222 1.83333 1.72222H4.88889C5.225 1.72222 5.5 1.44722 5.5 1.11111C5.5 0.775 5.225 0.5 4.88889 0.5H1.22222C0.543889 0.5 0 1.05 0 1.72222V10.2778C0 10.95 0.55 11.5 1.22222 11.5H9.77778C10.45 11.5 11 10.95 11 10.2778V6.61111C11 6.275 10.725 6 10.3889 6C10.0528 6 9.77778 6.275 9.77778 6.61111V9.66667C9.77778 10.0028 9.50278 10.2778 9.16667 10.2778ZM6.72222 1.11111C6.72222 1.44722 6.99722 1.72222 7.33333 1.72222H8.91611L3.33667 7.30167C3.09833 7.54 3.09833 7.925 3.33667 8.16333C3.575 8.40167 3.96 8.40167 4.19833 8.16333L9.77778 2.58389V4.16667C9.77778 4.50278 10.0528 4.77778 10.3889 4.77778C10.725 4.77778 11 4.50278 11 4.16667V1.11111C11 0.775 10.725 0.5 10.3889 0.5H7.33333C6.99722 0.5 6.72222 0.775 6.72222 1.11111Z"
              fill="#4D4040"
            />
          </svg>
        </span>
      </a>
    </DocumentFragment>
  `);
});
