import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Alert } from "../../components/Alert";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Alert text="Alert title">Description</Alert>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-uwtvqf-Alert"
        style="right: -250px;"
      >
        <div
          class="css-4cffwv"
        >
          <svg
            fill="none"
            viewBox="0 0 30 26"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.14966 26H26.8503C29.2739 26 30.7847 23.447 29.5729 21.4138L17.7226 1.52492C16.5108 -0.508305 13.4892 -0.508305 12.2774 1.52492L0.427071 21.4138C-0.784717 23.447 0.726083 26 3.14966 26ZM15 15.2988C14.1344 15.2988 13.4262 14.6109 13.4262 13.7701V10.7126C13.4262 9.87182 14.1344 9.18389 15 9.18389C15.8656 9.18389 16.5738 9.87182 16.5738 10.7126V13.7701C16.5738 14.6109 15.8656 15.2988 15 15.2988ZM16.5738 19.8851C16.5738 20.7293 15.8893 21.4138 15.045 21.4138H14.955C14.1107 21.4138 13.4262 20.7293 13.4262 19.8851C13.4262 19.0408 14.1107 18.3563 14.955 18.3563H15.045C15.8893 18.3563 16.5738 19.0408 16.5738 19.8851Z"
              fill="#DF4141"
            />
          </svg>
        </div>
        <div
          class="css-1l5ipu9-Alert css-4cffwv"
        >
          <p
            class="sc-gsnTZi iraXgd css-v1hy58-Alert"
            color="text"
          >
            Alert title
          </p>
        </div>
        <div
          class="css-vurnku"
        >
          <button
            class="css-1rb0um5"
          >
            <svg
              class="css-1o9bukh-Close"
              fill="none"
              viewBox="0 0 12 12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M10.9497 10.9497C11.3403 10.5592 11.3403 9.92602 10.9497 9.5355L7.41424 5.99999L10.9497 2.46451C11.3402 2.07399 11.3402 1.44082 10.9497 1.0503C10.5592 0.659775 9.92602 0.659775 9.5355 1.0503L6.00002 4.58578L2.46446 1.05022C2.07394 0.659693 1.44077 0.659693 1.05025 1.05022C0.659726 1.44074 0.659726 2.07391 1.05025 2.46443L4.58581 5.99999L1.05022 9.53558C0.659693 9.9261 0.659693 10.5593 1.05022 10.9498C1.44074 11.3403 2.07391 11.3403 2.46443 10.9498L6.00002 7.4142L9.53553 10.9497C9.92605 11.3402 10.5592 11.3402 10.9497 10.9497Z"
                fill="#FAFAFA"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </DocumentFragment>
  `);
});
