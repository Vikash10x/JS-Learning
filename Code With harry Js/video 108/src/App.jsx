import { useState, useEffect } from "react";
import "./App.css";
import Nevbar from "./components/Nevbar";

function App() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    alert("Count was changed");
    setColor(color + 1);
  }, [count]);

  return (
    <>
      <Nevbar color={"red " + "blue " + color} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
