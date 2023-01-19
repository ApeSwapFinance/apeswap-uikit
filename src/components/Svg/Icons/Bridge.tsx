/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Bridge: React.FC<SvgProps> = ({ direction = "right", color = "text", width, getStyles }) => {
  const deg: rotation = {
    left: 180,
    up: 270,
    right: 0,
    down: 90,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <g clipPath="url(#clip0_690_4087)">
        <path
          d="M19.8552 17.2023H17.0085V6.93992C16.8302 7.11875 16.6949 7.27896 16.5363 7.40936C16.2686 7.62979 15.9837 7.82725 15.7124 8.04272C15.651 8.09115 15.5765 8.17622 15.5765 8.24515C15.5687 9.98069 15.5705 11.7162 15.5705 13.4772H16.2698V15.7077H7.73136V13.4921H8.42829V13.2413C8.42829 11.6138 8.42471 9.9869 8.43306 8.3594C8.43425 8.17684 8.3651 8.09612 8.23274 7.99677C7.81363 7.68257 7.41061 7.34478 7.00521 7.01878V17.1955H4.14355C4.14355 17.1172 4.14355 17.0359 4.14355 16.9545C4.14355 12.5067 4.14355 8.05824 4.14355 3.61041C4.14355 3.1801 4.2455 3.07267 4.65329 3.07205C5.27808 3.07205 5.90288 3.07143 6.52767 3.07205C6.87942 3.07205 6.99865 3.195 6.99985 3.55639C7.00104 3.94386 7.01356 4.33195 6.99746 4.7188C6.96109 5.59992 7.31165 6.296 7.92512 6.86479C8.72757 7.60868 9.69457 7.98684 10.7361 8.17001C11.9428 8.38238 13.1369 8.30414 14.3012 7.8999C15.0793 7.62979 15.7875 7.23114 16.3432 6.58288C16.7819 6.07122 17.0186 5.4807 17.0001 4.78462C16.9888 4.36672 16.9966 3.94759 16.999 3.52907C17.0007 3.20742 17.1259 3.0733 17.4294 3.07205C18.0912 3.06957 18.7535 3.06957 19.4153 3.07205C19.7312 3.0733 19.8541 3.20494 19.8546 3.54335C19.8558 4.89142 19.8546 6.24012 19.8546 7.58819C19.8546 10.6954 19.8546 13.8032 19.8546 16.9104V17.201L19.8552 17.2023ZM14.8396 13.4766V8.51029C14.3632 8.64876 13.9018 8.78351 13.4386 8.91887V13.4766H14.8396ZM10.5572 13.4791V8.91577C10.0785 8.77668 9.61767 8.64255 9.15622 8.50843V13.4797H10.5572V13.4791ZM12.7023 13.4779V9.01139H11.2971V13.4779H12.7023Z"
          fill="#4D4040"
        />
        <path
          d="M19.0701 3.33024C19.0207 3.23428 19.0019 3.11118 19 3L19.0125 4.78424C19.1159 4.90205 19.1829 4.9808 19.2518 5.05757C20.1492 6.05955 21.2434 6.59893 22.5561 6.61746C22.8429 6.62143 23.0101 6.46855 23.0164 6.21111C23.0227 5.95234 22.8586 5.78424 22.5793 5.77564C20.9327 5.72401 19.8273 4.80344 19.0701 3.33024Z"
          fill="#4D4040"
        />
        <path
          d="M4.94646 3.33024C4.99593 3.23428 5.01472 3.11118 5.0166 3L5.00408 4.78424C4.90074 4.90205 4.83372 4.9808 4.76483 5.05757C3.86736 6.05955 2.77322 6.59893 1.46052 6.61746C1.17367 6.62143 1.00646 6.46855 1.00019 6.21111C0.99393 5.95234 1.15802 5.78424 1.43734 5.77564C3.08386 5.72401 4.18927 4.80344 4.94646 3.33024Z"
          fill="#4D4040"
        />
        <path
          d="M5.56866 20.9279C5.00348 20.9279 4.4389 20.9292 3.87372 20.9279C3.55536 20.9267 3.43136 20.7963 3.42957 20.4616C3.42778 20.0282 3.41645 19.5935 3.43672 19.1613C3.44328 19.021 3.50767 18.8614 3.59471 18.7528C3.77535 18.528 3.97746 18.3181 4.19268 18.1293C4.29701 18.038 4.45023 17.9635 4.58318 17.9604C5.23659 17.9437 5.89119 17.9424 6.5452 17.9604C6.6853 17.9642 6.83911 18.0449 6.95835 18.1318C7.5748 18.582 7.85083 19.1893 7.71848 19.9816C7.69105 20.1468 7.71669 20.3219 7.71371 20.492C7.70834 20.7926 7.57897 20.9267 7.28506 20.9279C6.71273 20.9304 6.14039 20.9285 5.56806 20.9285L5.56866 20.9279Z"
          fill="#4D4040"
        />
        <path
          d="M18.425 20.9279C17.8598 20.9279 17.2952 20.9292 16.73 20.9279C16.4105 20.9267 16.2859 20.7969 16.2847 20.4635C16.2829 20.0301 16.2698 19.5954 16.2924 19.1632C16.3002 19.0173 16.3789 18.8602 16.4624 18.7354C16.8946 18.0896 17.4776 17.8288 18.2402 17.9431C18.6187 17.9996 19.0128 17.9375 19.3979 17.9611C19.5392 17.9698 19.7079 18.0337 19.8093 18.1331C20.5736 18.8819 20.5694 18.8869 20.5694 19.9798C20.5694 20.158 20.573 20.3362 20.5682 20.5138C20.5611 20.7864 20.4287 20.9255 20.164 20.9273C19.5845 20.9311 19.0045 20.9286 18.425 20.9286V20.9279Z"
          fill="#4D4040"
        />
        <path
          d="M3.41901 13.489V15.7089C3.03925 15.7089 2.6565 15.7275 2.27614 15.7008C2.09788 15.6884 2.00309 15.5257 2.00249 15.332C2.0007 14.8452 1.99713 14.3577 2.00428 13.8709C2.00786 13.6381 2.14557 13.4965 2.36914 13.4909C2.71016 13.4828 3.05177 13.489 3.41901 13.489Z"
          fill="#4D4040"
        />
        <path
          d="M20.585 13.489C20.9486 13.489 21.2968 13.4822 21.6444 13.4915C21.8548 13.4971 21.9913 13.6411 21.9949 13.8622C22.0027 14.3564 22.0027 14.8513 21.9949 15.3462C21.9913 15.5667 21.8536 15.7107 21.6432 15.7163C21.2956 15.7256 20.9474 15.7188 20.585 15.7188V13.489Z"
          fill="#4D4040"
        />
      </g>
      <defs>
        <clipPath id="clip0_690_4087">
          <rect width="20" height="17.8571" fill="white" transform="translate(2 3.07141)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bridge;
