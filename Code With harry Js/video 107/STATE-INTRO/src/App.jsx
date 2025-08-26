import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(100);

  return (
    <>
      <div>Count is {count}</div>
      <button
        onClick={() => {
          setCount(count - 2);
        }}
      >
        Update button
      </button>
    </>
  );
}

export default App;
