import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const Icon: React.FC<LegacySvgProps> = ({ color, bgColor, ...props }) => {
  return (
    <LegacySvg xmlns="http://www.w3.org/2000/svg" width="95" height="95" fill="none" viewBox="0 0 95 95" {...props}>
      <path
        fill="#4D4040"
        d="M13.909 13.909c18.545-18.545 48.637-18.545 67.182 0s18.545 48.587 0 67.182c-18.545 18.545-48.637 18.545-67.182 0s-18.545-48.637 0-67.182z"
      />
      <path
        fill="#4D4040"
        d="M80.141 80.142c-18.045 18.045-47.287 18.045-65.332 0-18.046-18.046-18.046-47.288 0-65.333 18.045-18.045 47.287-18.045 65.332 0 18.046 18.045 18.046 47.287 0 65.333z"
      />
      <path
        fill="url(#paint0_radial_3838_10015)"
        d="M47.5 91.089c24.073 0 43.588-19.516 43.588-43.589S71.573 3.912 47.5 3.912 3.91 23.427 3.91 47.5 23.427 91.09 47.5 91.09z"
      />
      <path
        fill="url(#paint1_radial_3838_10015)"
        d="M47.5 89.09c22.969 0 41.589-18.62 41.589-41.59 0-22.969-18.62-41.589-41.589-41.589-22.969 0-41.589 18.62-41.589 41.59 0 22.968 18.62 41.588 41.589 41.588z"
      />
      <path
        fill="url(#paint2_radial_3838_10015)"
        d="M47.5 87.44c22.058 0 39.94-17.882 39.94-39.94 0-22.058-17.882-39.94-39.94-39.94-22.058 0-39.94 17.882-39.94 39.94 0 22.058 17.882 39.94 39.94 39.94z"
      />
      <path
        fill={bgColor !== undefined ? bgColor : "#212121"}
        d="M47.5 89.09c22.969 0 41.589-18.62 41.589-41.59 0-22.969-18.62-41.589-41.589-41.589-22.969 0-41.589 18.62-41.589 41.59 0 22.968 18.62 41.588 41.589 41.588z"
      />
      <path
        fill={color !== undefined ? color : "#FFF"}
        d="M36.703 58.097c-1.65-1.6-3.25-2.15-4.7-1.65-3.898 1.35-5.098 9.848-5.198 10.848-.05.25.1.5.3.65.15.2.45.3.7.3.95-.1 9.498-1.3 10.847-5.2.5-1.499-.05-3.148-1.75-4.848-.1 0-.15-.05-.2-.1z"
      />
      <path
        fill={color !== undefined ? color : "#FFF"}
        d="M67.395 26.755c-10.198 0-19.695 8.348-25.893 15.446-13.397.1-14.397 12.697-14.397 12.797 0 .3.1.55.35.75.15.1.35.15.5.15.1 0 .2 0 .3-.05l4.749-1.8c.95-.35 2.05-.15 2.749.6l4.549 4.549c.7.7.95 1.8.6 2.75l-1.8 4.748a.9.9 0 00.1.8c.15.2.4.35.7.35h.05c.15 0 12.697-1 12.797-14.397 7.098-6.198 15.445-15.696 15.445-25.893.05-.4-.3-.8-.8-.8zM54.548 44.101c-2 0-3.599-1.6-3.599-3.6 0-1.999 1.6-3.598 3.6-3.598 1.998 0 3.598 1.6 3.598 3.599 0 2-1.6 3.599-3.599 3.599z"
      />
      <defs>
        <radialGradient
          id="paint0_radial_3838_10015"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(94.6686 0 0 94.6783 9.458 76.42)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE988" />
          <stop offset="0.25" stopColor="#BA801E" />
          <stop offset="0.5" stopColor="#FBEC83" />
          <stop offset="0.75" stopColor="#BA801F" />
          <stop offset="1" stopColor="#FFE97F" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_3838_10015"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(14.824 74.63) scale(80.5644)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE988" />
          <stop offset="0.25" stopColor="#BA801E" />
          <stop offset="0.5" stopColor="#FBEC83" />
          <stop offset="0.75" stopColor="#BA801F" />
          <stop offset="1" stopColor="#FFE97F" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_3838_10015"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(15.597 10.665) scale(103.98)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE988" />
          <stop offset="0.25" stopColor="#BA801E" />
          <stop offset="0.5" stopColor="#FBEC83" />
          <stop offset="0.75" stopColor="#BA801F" />
          <stop offset="1" stopColor="#FFE97F" />
        </radialGradient>
      </defs>
    </LegacySvg>
  );
};

export default Icon;
