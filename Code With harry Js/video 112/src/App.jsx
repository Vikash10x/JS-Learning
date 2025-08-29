import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  // const [name, setName] = useState("vikash");
  const [form, setForm] = useState({
    email: "kumawat@gmail.com",
    password: "8619298781",
  });

  const handleClick = () => {
    alert("Hyy I am div");
  };

  const handleMouse = () => {
    alert("Hyy I am mouse over");
  };

  const handleChange = (e) => {
    // setName(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <div className="btn">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="red" onMouseOver={handleMouse}>
        i am a div
      </div>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
