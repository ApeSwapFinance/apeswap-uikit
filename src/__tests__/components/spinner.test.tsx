import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Spinner } from "../../components/Spinner";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Spinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsTCUz khJLZs"
      >
        <svg
          class="sc-bdfBwQ gHQxTr sc-hKgILt jsGrON"
          color="text"
          viewBox="0 0 1512 1512"
          width="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              .cls-1{fill:#a16552;}.cls-2{fill:#f5dcb4;}.cls-3,.cls-7{fill:#4e3f3f;}.cls-4{fill:#e6646e;}.cls-5{fill:#5d5360;}.cls-6{fill:#fff;}.cls-7{opacity:0.35;}
            </style>
          </defs>
          <path
            class="cls-1"
            d="M107.06,284a275.78,275.78,0,0,0-9.82,71.82c0,1.7,0,3.37,0,5,.37,29.36-3.27,58.53-9.82,87.11C73.93,443.21,60,433.48,46.72,416.67c-34.95-44.27-23.3-115.33,19.81-132,16.31-6.32,30-5,40.61-.84Z"
          />
          <path
            class="cls-2"
            d="M107.06,284a275.78,275.78,0,0,0-9.82,71.82c0,1.7,0,3.37,0,5,.37,29.36-3.27,58.53-9.82,87.11C73.93,443.21,60,433.48,46.72,416.67c-34.95-44.27-23.3-115.33,19.81-132,16.31-6.32,30-5,40.61-.84Z"
          />
          <path
            class="cls-1"
            d="M751.29,416.67C738,433.46,724.09,443.19,710.57,448a369.59,369.59,0,0,1-9.83-87.1c0-1.66,0-3.33,0-5a274.93,274.93,0,0,0-9.9-72.08c10.66-4.14,24.3-5.48,40.61.84C774.59,301.34,786.24,372.4,751.29,416.67Z"
          />
          <path
            class="cls-2"
            d="M751.29,416.67C738,433.46,724.09,443.19,710.57,448a369.59,369.59,0,0,1-9.83-87.1c0-1.66,0-3.33,0-5a274.93,274.93,0,0,0-9.9-72.08c10.66-4.14,24.3-5.48,40.61.84C774.59,301.34,786.24,372.4,751.29,416.67Z"
          />
          <path
            class="cls-1"
            d="M616.94,448.92c-12.69,19.9-16.2,44.53-8.58,67,5.74,16.9,10.87,36,10.87,50.25,0,104.06-98.59,188.41-220.23,188.41S178.76,670.21,178.76,566.15c0-14.23,5.14-33.34,10.88-50.25,7.61-22.43,4.12-47.08-8.58-67A122.58,122.58,0,0,1,172.93,434,119.35,119.35,0,0,1,162,384c0-69.1,58.83-125.12,131.41-125.12a135.88,135.88,0,0,1,66.94,17.44,78.21,78.21,0,0,0,77.29,0,135.76,135.76,0,0,1,66.92-17.42c72.59,0,131.42,56,131.42,125.12a119.39,119.39,0,0,1-10.91,50A122.51,122.51,0,0,1,616.94,448.92Z"
          />
          <path
            class="cls-2"
            d="M616.94,448.92c-12.69,19.9-16.2,44.53-8.58,67,5.74,16.9,10.87,36,10.87,50.25,0,104.06-98.59,188.41-220.23,188.41S178.76,670.21,178.76,566.15c0-14.23,5.14-33.34,10.88-50.25,7.61-22.43,4.12-47.08-8.58-67A122.58,122.58,0,0,1,172.93,434,119.35,119.35,0,0,1,162,384c0-69.1,58.83-125.12,131.41-125.12a135.88,135.88,0,0,1,66.94,17.44,78.21,78.21,0,0,0,77.29,0,135.76,135.76,0,0,1,66.92-17.42c72.59,0,131.42,56,131.42,125.12a119.39,119.39,0,0,1-10.91,50A122.51,122.51,0,0,1,616.94,448.92Z"
          />
          <path
            class="cls-3"
            d="M286.81,589.43a12.65,12.65,0,0,0-12.55,14.29c7.8,55.75,60.68,98.88,124.75,98.88S516,659.47,523.76,603.72a12.66,12.66,0,0,0-12.56-14.29Z"
          />
          <path
            class="cls-4"
            d="M326.55,681.83a136.76,136.76,0,0,0,144.91,0c-9.08-31.47-38.16-24.22-72.45-24.22S335.64,650.36,326.55,681.83Z"
          />
          <path
            class="cls-1"
            d="M746.39,261.35c-26.06-10.11-46.75-4.78-61.28,3.58a320.3,320.3,0,0,0-12.25-30.74q-5.05-11-10.92-21.73C622.06,139.49,555,78.92,478,53.32l-1.52-41.41L426.7,41.81c-2-.22-4-.44-6-.62-3.68-.34-7.34-.59-11.05-.75L402.37,9.12,400.24,0c-2.48,0-4.92.07-7.28.27-46.37,3.76-69.44,45.88-73,53.1C243,79,176,139.52,136.07,212.46q-5.87,10.69-10.92,21.73A323.37,323.37,0,0,0,112.89,265c-.61-.37-1.23-.72-1.87-1.05-14.42-7.74-34.46-12.22-59.4-2.55C-3.15,282.59-17.93,372.86,26.45,429.11c18.11,22.9,37.17,35.44,55.52,41-.25,1-.47,2.07-.7,3.1a214.9,214.9,0,0,0-5,46.08c0,107.45,79.26,199.87,192.8,240.54a376.31,376.31,0,0,0,82.44,19.33,397.33,397.33,0,0,0,44,2.82c1.16,0,2.33,0,3.49,0C577.23,782,721.7,664.39,721.7,519.31a215.53,215.53,0,0,0-5-46.08c-.23-1-.46-2.07-.7-3.09,18.35-5.59,37.41-18.13,55.5-41.05C815.94,372.86,801.14,282.58,746.39,261.35ZM107.06,284a275.78,275.78,0,0,0-9.82,71.82c0,1.7,0,3.37,0,5,.37,29.36-3.27,58.53-9.82,87.11C73.93,443.21,60,433.48,46.72,416.67c-34.95-44.27-23.3-115.33,19.81-132,16.31-6.32,30-5,40.61-.84Zm518,150a122.51,122.51,0,0,1-8.14,14.93c-12.69,19.9-16.2,44.53-8.58,67,5.74,16.9,10.87,36,10.87,50.25,0,104.06-98.59,188.41-220.23,188.41S178.76,670.21,178.76,566.15c0-14.23,5.14-33.34,10.88-50.25,7.61-22.43,4.12-47.08-8.58-67A122.58,122.58,0,0,1,172.93,434,119.35,119.35,0,0,1,162,384c0-69.1,58.83-125.12,131.41-125.12a135.88,135.88,0,0,1,66.94,17.44,78.21,78.21,0,0,0,77.29,0,135.76,135.76,0,0,1,66.92-17.42c72.59,0,131.42,56,131.42,125.12A119.39,119.39,0,0,1,625.08,434Zm126.21-17.32C738,433.46,724.09,443.19,710.57,448a369.59,369.59,0,0,1-9.83-87.1c0-1.66,0-3.33,0-5a274.93,274.93,0,0,0-9.9-72.08c10.66-4.14,24.3-5.48,40.61.84C774.59,301.34,786.24,372.4,751.29,416.67Z"
          />
          <rect
            class="cls-3"
            height="48.06"
            rx="10.58"
            transform="translate(-245.92 628.44) rotate(-65.45)"
            width="21.16"
            x="355.46"
            y="481.55"
          />
          <rect
            class="cls-3"
            height="48.06"
            rx="10.58"
            transform="translate(151.6 1108.57) rotate(-114.55)"
            width="21.16"
            x="421.4"
            y="481.55"
          />
          <path
            class="cls-3"
            d="M285.83,434h0c-20.83,0-37.72-16-37.72-35.75V386.3c0-19.75,16.89-35.75,37.72-35.75h0c20.84,0,37.73,16,37.73,35.75v11.91C323.56,418,306.67,434,285.83,434Z"
          />
          <path
            class="cls-5"
            d="M285.83,350.55v41.71c0,9.87,8.45,17.87,18.86,17.87s18.87-8,18.87-17.87v-6C323.56,366.55,306.67,350.55,285.83,350.55Z"
          />
          <ellipse
            class="cls-6"
            cx="285.84"
            cy="374.39"
            rx="12.57"
            ry="11.92"
          />
          <path
            class="cls-3"
            d="M512.17,434h0c-20.83,0-37.72-16-37.72-35.75V386.3c0-19.75,16.89-35.75,37.72-35.75h0c20.84,0,37.73,16,37.73,35.75v11.91C549.9,418,533,434,512.17,434Z"
          />
          <path
            class="cls-5"
            d="M512.17,350.55v41.71c0,9.87,8.45,17.87,18.86,17.87s18.87-8,18.87-17.87v-6C549.9,366.55,533,350.55,512.17,350.55Z"
          />
          <ellipse
            class="cls-6"
            cx="512.17"
            cy="374.39"
            rx="12.57"
            ry="11.92"
          />
          <path
            class="cls-7"
            d="M402.37,9.12c-8.44-.84-26.92,12.44-49.05,35.48-5.51,5.74-11.26,12.11-17.16,19C292.81,114.46,242.55,194.66,225.33,277c-28.9,138.17-40.64,298.47,10.35,387.39C278.9,739.7,351.54,779.18,351.54,779.18a376.31,376.31,0,0,1-82.44-19.33C155.56,719.18,76.3,626.76,76.3,519.31a214.9,214.9,0,0,1,5-46.08c.23-1,.45-2.07.7-3.1-18.35-5.58-37.41-18.12-55.52-41-44.38-56.25-29.6-146.52,25.17-167.76,24.94-9.67,45-5.19,59.4,2.55.64.33,1.26.68,1.87,1.05a323.37,323.37,0,0,1,12.26-30.76q5.06-11,10.92-21.73C176,139.52,243,79,319.92,53.36c3.6-7.22,26.67-49.34,73-53.1,2.36-.2,4.8-.29,7.28-.27Z"
          />
        </svg>
        <svg
          class="sc-bdfBwQ gHQxTr sc-dlfnbm mabrO"
          color="text"
          viewBox="0 0 512 512"
          width="64px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m421.081 377.275c-.338-.167-35.23-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.116-50.547-48.996-50.977-26.488-1.153-52.688 22.143-58.244 69.774-23.266 199.426 64.548 322.759 190.747 390.738 24.913 12.664 57.707 2.559 70.468-23.797 12.887-26.035 2.235-57.59-23.794-70.481z"
              fill="#ffecb3"
            />
            <path
              d="m421.081 377.275c-.338-.167-35.231-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.115-50.547-48.996-50.977-6.106-.266-12.194.785-18.02 3.116 12.66 5.163 29.234 18.034 36.111 47.861 9.076 39.365-1.677 111.116 13.584 160.865 10.833 34.196 26.916 65.245 47.802 92.284 33.566 43.456 68.458 61.941 68.796 62.108 26.029 12.891 36.682 44.446 23.793 70.48-6.581 13.593-18.494 22.848-31.903 26.902 23.594 7.373 51.32-3.173 62.808-26.902 12.887-26.034 2.235-57.589-23.794-70.48z"
              fill="#ffe082"
            />
            <path
              d="m267.264 276.479s-59.132-76.346-138.999-79.618-77.615 121.081-103.878 134.697c-26.263 13.616-24.356 26.827-24.356 26.827s1.315 12.049 22.764 4.259 25.249-13.644 33.453-23.77 26.28-114.537 71.564-111.638 55.952 99.175 106.725 156.511 108.464 101.771 170.019 97.615c54.899-3.707 74.453 12.369 87.262 19.088 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.273-2.474.181-5.508-2.383-6.588-10.879-4.583-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465c44.03.928 51.81 76.228 74.32 101.177 19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-60.865 1.512-113.721 50.365-110.947 143.555z"
              fill="#ffd54f"
            />
            <path
              d="m509.085 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465 51.811 76.228 74.321 101.177c19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-51.029 1.269-96.42 35.82-108.127 101.87-1.755 25.035-2.821 41.687-2.821 41.687s12.196 94.781 94.903 133.029c82.707 38.247 56.038 50.917 99.727 76.828.007.004.013.007.019.011 14.584 4.469 23.179 10.574 29.905 14.102 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.475.181-5.509-2.383-6.589z"
              fill="#ffca28"
            />
            <g>
              <path
                d="m509.084 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.386-125.632c1.064-19.898-1.885-60.816 23.857-72.373-30.683 10.32-54.762 33.302-54.762 72.373 0 38.171 24.858 84.967 73.386 125.632 48.527 40.665 33.024 34.392 50.057 62.876 22.101 36.959 57.612 34.967 60.443 73.433.948.537 1.857 1.042 2.733 1.501 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.474.181-5.508-2.384-6.588z"
                fill="#ffb300"
              />
            </g>
          </g>
        </svg>
      </div>
    </DocumentFragment>
  `);
});
