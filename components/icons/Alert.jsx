import React from "react";


const Alert = ({ className = "w-full h-full fill-current" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.24997 7C3.24997 5.20979 3.96113 3.4929 5.227 2.22703C6.49287 0.961159 8.20976 0.25 9.99997 0.25C11.7902 0.25 13.5071 0.961159 14.7729 2.22703C16.0388 3.4929 16.75 5.20979 16.75 7V7.75C16.75 9.873 17.55 11.807 18.868 13.27C18.9501 13.361 19.0086 13.4707 19.0385 13.5896C19.0684 13.7084 19.0687 13.8328 19.0394 13.9518C19.0101 14.0708 18.9521 14.1808 18.8704 14.2722C18.7887 14.3636 18.6859 14.4335 18.571 14.476C17.027 15.046 15.411 15.466 13.74 15.719C13.7776 16.2331 13.7088 16.7495 13.5379 17.2359C13.367 17.7222 13.0977 18.1681 12.7467 18.5457C12.3957 18.9233 11.9707 19.2245 11.4981 19.4304C11.0255 19.6364 10.5155 19.7427 9.99997 19.7427C9.48446 19.7427 8.97448 19.6364 8.50188 19.4304C8.02929 19.2245 7.60424 18.9233 7.25327 18.5457C6.90229 18.1681 6.63295 17.7222 6.46204 17.2359C6.29114 16.7495 6.22235 16.2331 6.25997 15.719C4.61163 15.4692 2.99296 15.0524 1.42897 14.475C1.31411 14.4326 1.21137 14.3627 1.12973 14.2715C1.0481 14.1802 0.990049 14.0703 0.960654 13.9515C0.931259 13.8326 0.931413 13.7084 0.961102 13.5896C0.990791 13.4708 1.04911 13.3611 1.13097 13.27C2.49778 11.7567 3.25305 9.78919 3.24997 7.75V7ZM7.75197 15.9C7.73918 16.2032 7.78785 16.5058 7.89506 16.7897C8.00226 17.0736 8.16579 17.3329 8.37579 17.5519C8.5858 17.771 8.83795 17.9453 9.11707 18.0644C9.39619 18.1835 9.69651 18.2448 9.99997 18.2448C10.3034 18.2448 10.6038 18.1835 10.8829 18.0644C11.162 17.9453 11.4141 17.771 11.6242 17.5519C11.8342 17.3329 11.9977 17.0736 12.1049 16.7897C12.2121 16.5058 12.2608 16.2032 12.248 15.9C10.7523 16.0347 9.24761 16.0347 7.75197 15.9Z"
        fill="black"
      />
    </svg>
  );
};

export default Alert;
