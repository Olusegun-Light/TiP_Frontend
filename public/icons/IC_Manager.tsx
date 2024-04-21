import React from "react";

const IC_Manager = (props: { className?: string }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20Z"
        stroke={"#1976D2"}
        stroke-width="2.5"
        stroke-linecap="round"
        className={props.className}
        stroke-linejoin="round"
      />
      <path
        d="M42 44C42 34.059 33.941 26 24 26C14.059 26 6 34.059 6 44"
        stroke={"#1976D2"}
        stroke-width="2.5"
        stroke-linecap="round"
        className={props.className}
        fill="none"
        stroke-linejoin="round"
      />
      <path
        d="M24 44L28 39L24 26L20 39L24 44Z"
        stroke={"#1976D2"}
        stroke-width="2.5"
        stroke-linecap="round"
        className={props.className}
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IC_Manager;
