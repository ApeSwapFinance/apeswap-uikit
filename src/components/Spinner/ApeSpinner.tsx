import React from "react";
import Lottie from "lottie-react";
import apeSpinner from "./apeSpinner.json";

const ApeSpinner: React.FC = () => {
  return <Lottie animationData={apeSpinner} loop />;
};

export default ApeSpinner;
