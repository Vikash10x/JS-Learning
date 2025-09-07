import React, { useContext } from "react";
import { counterContext } from "../../context/context";
import { Component1 } from "./Component1";

export const Button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <div>
        <button onClick={() => value.setCount((count) => count + 1)}>
          <span>
            <Component1 />
          </span>
          I am button
        </button>
      </div>
    </div>
  );
};
