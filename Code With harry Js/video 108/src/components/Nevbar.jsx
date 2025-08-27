import React from "react";
import { useEffect } from "react";

const Nevbar = ({ color }) => {
  // case 1: it will run for every render
  useEffect(() => {
    alert("Hyy I will run for every render");
  });

  // case 2: it will run only first render
  useEffect(() => {
    alert("Hyy welcome to my page. This is a first render");
  }, []);

  // case 3: run only certain value change
  useEffect(() => {
    alert("Hyy i am running because Color was changed");
  }, [color]);

  // case: Cleanup function
  useEffect(() => {
    alert("Hyy welcome to my page. This is a first render of app.jsx");
    return () => {
      alert("Component was unmounted");
    };
  }, []);

  return <div>I am nevbar of {color} color hehe..</div>;
};

export default Nevbar;
