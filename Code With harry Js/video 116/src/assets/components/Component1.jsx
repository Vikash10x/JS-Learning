import React, { useContext } from "react";
import { counterContext } from "../../context/context";

export const Component1 = () => {
  const value = useContext(counterContext);
  return <div>{value.count}</div>;
};
