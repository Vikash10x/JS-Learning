import React from "react";
import { memo } from "react";

const Navbar = ({ adjective }) => {
  console.log("Navbar is rendered....");

  return (
    <div>
      <div>I am a {adjective} Navbar</div>
      <button
        onClick={() => {
          getAdjective();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default memo(Navbar);
