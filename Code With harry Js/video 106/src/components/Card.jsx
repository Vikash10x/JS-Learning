import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img src="src/img.jpeg" alt="" width={300} height={300} />
      <h3>{props.title}</h3>
      <h5>{props.description}</h5>
      <p>{props.main}</p>
    </div>
  );
};
