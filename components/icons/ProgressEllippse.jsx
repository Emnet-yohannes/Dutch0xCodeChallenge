import React from "react";

const ProgressEllipse = ({ className = "w-full h-full fill-current" }) => {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00018 0.498695C8.00018 1.54927 7.79326 2.58956 7.39122 3.56016C6.98918 4.53077 6.39991 5.41268 5.65704 6.15555C4.91417 6.89842 4.03226 7.48769 3.06165 7.88973C2.09105 8.29177 1.05076 8.4987 0.000182629 8.4987L0.000183105 0.498695H8.00018Z"
        fill="white"
      />
    </svg>
  );
};

export default ProgressEllipse;
