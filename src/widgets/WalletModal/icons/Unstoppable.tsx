import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Unstoppable Domains Logo</title>
      <g clipPath="url(#clip0_397_9586)">
        <path d="M36.6855 3.52722V15.6759L1 30.0309L36.6855 3.52722Z" fill="#00C9FF" />
        <path
          d="M29.9957 3V23.9573C29.9957 26.8859 28.8208 29.6947 26.7293 31.7656C24.6378 33.8366 21.8011 35 18.8433 35C15.8855 35 13.0489 33.8366 10.9574 31.7656C8.8659 29.6947 7.69092 26.8859 7.69092 23.9573V15.1264L14.3812 11.4807V23.9573C14.3186 24.5018 14.3728 25.0533 14.5404 25.5756C14.708 26.0979 14.9851 26.5792 15.3537 26.9881C15.7223 27.397 16.1739 27.7241 16.679 27.9481C17.1842 28.1721 17.7314 28.288 18.2849 28.288C18.8383 28.288 19.3856 28.1721 19.8907 27.9481C20.3958 27.7241 20.8475 27.397 21.216 26.9881C21.5846 26.5792 21.8617 26.0979 22.0293 25.5756C22.1969 25.0533 22.2512 24.5018 22.1885 23.9573V7.22924L29.9957 3Z"
          fill="#0D67FE"
        />
      </g>
      <defs>
        <clipPath id="clip0_397_9586">
          <rect width="35.6855" height="32" fill="white" transform="translate(1 3)" />
        </clipPath>
      </defs>
    </LegacySvg>
  );
};

export default Icon;
