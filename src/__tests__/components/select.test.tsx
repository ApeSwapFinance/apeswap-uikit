import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Select, SelectItem } from "../../components/Select";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <Select onChange={() => null}>
      <SelectItem value={0}>Dropdown</SelectItem>
    </Select>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-9fp63e-Select css-vurnku"
      >
        <div
          class="css-1o8c54s-Select css-4cffwv"
        >
          <svg
            class="css-1exjd22-Caret"
            fill="none"
            viewBox="0 0 10 8"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.30702 7.70463C4.26072 7.65942 4.06273 7.48875 3.89987 7.32976C2.87559 6.39766 1.19907 3.9661 0.687336 2.69342C0.605106 2.50015 0.431067 2.01149 0.419891 1.75041C0.419891 1.50024 0.477372 1.26176 0.59393 1.03419C0.756792 0.750511 1.01306 0.522942 1.31563 0.398246C1.52559 0.317973 2.15389 0.193278 2.16507 0.193278C2.85244 0.0685823 3.96932 -2.63609e-07 5.20356 -2.09659e-07C6.37952 -1.58256e-07 7.45089 0.0685824 8.14864 0.170677C8.15982 0.182367 8.9406 0.307063 9.20804 0.443449C9.69663 0.693619 10 1.18227 10 1.70521L10 1.75041C9.98802 2.09099 9.68465 2.80721 9.67348 2.80721C9.16094 4.0113 7.56665 6.38675 6.50725 7.34145C6.50725 7.34145 6.23502 7.61033 6.06497 7.72723C5.82068 7.9096 5.51811 8 5.21553 8C4.87783 8 4.56329 7.8979 4.30702 7.70463Z"
              fill="#4D4040"
            />
          </svg>
        </div>
        <input
          aria-hidden="true"
          class="css-krtuhb-Select"
          tabindex="-1"
          value=""
        />
      </div>
    </DocumentFragment>
  `);
});
