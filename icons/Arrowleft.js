import React from 'react';

const Arrowleft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      class="carret"
      data-target="dropdown.carret"
      viewBox="0 0 8 3"
      style={{transform:"rotate(90deg)"}}
    >
      <path
        fill="none"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m66.3706055 9 2.8516167 3 2.7777778-3"
        transform="translate(-65 -9)"
      ></path>
    </svg>
  );
};

export default Arrowleft;
