import { useState, useEffect } from "react";
import "./App.css";
import { Nevbar } from "./components/Nevbar";

function App() {
  const [cards, setCards] = useState([]);

  const dataFetch = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <Nevbar />
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By userId: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
