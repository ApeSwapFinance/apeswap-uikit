import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Carousel } from "../../components/Carousel";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Carousel slides={[]} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1ph062b"
      >
        <div
          class="css-1xe8amk"
        >
          <button
            class="css-3tz205"
          >
            <svg
              class="sc-bczRLJ iTbZjC"
              color="text"
              viewBox="0 0 24 24"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"
              />
            </svg>
          </button>
          <button
            class="css-3tz205"
          >
            <svg
              class="sc-bczRLJ iTbZjC"
              color="text"
              viewBox="0 0 24 24"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"
              />
            </svg>
          </button>
        </div>
        <div
          class="css-8ck628"
        />
        <div
          class="css-1bg7wee"
        >
          <div
            class="css-1cv2xms"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});
