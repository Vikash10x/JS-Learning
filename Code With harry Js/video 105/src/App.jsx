import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function incress() {
    setCount(count + 1);
  }

  return (
    <div>
      <Header />
      <div>{count}</div>
      <button onClick={incress}>Click me</button>
      <Footer />
    </div>
  );
}

export default App;
