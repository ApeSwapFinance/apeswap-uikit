import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Checkbox from "../../components/Checkbox/Checkbox";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Checkbox checked onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="css-yo6cuw-Checkbox"
      >
        <input
          checked=""
          class="css-kseaeg-Checkbox"
          type="checkbox"
        />
        <svg
          fill="none"
          height="auto"
          viewBox="0 0 13 10"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8132 0.171594C11.522 -0.0616871 11.0766 -0.046135 10.8025 0.218251L4.25899 6.76569L1.17566 4.46397C0.93585 4.27735 0.576128 4.2618 0.319184 4.43287C-0.00627898 4.63505 -0.0747974 5.0394 0.147888 5.33489L3.35113 9.4873C3.43677 9.59617 3.55668 9.70503 3.67659 9.78279C4.27612 10.156 5.09835 10.0161 5.50946 9.47175L5.56085 9.40954L11.9159 1.01141C12.1215 0.747022 12.0701 0.389324 11.8132 0.171594Z"
            fill="#FAFAFA"
          />
        </svg>
      </span>
    </DocumentFragment>
  `);
});
