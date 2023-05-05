import React from "react";
import { v4 } from "uuid";

const Cards = ({ cards, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {cards.map((card) => (
        <li key={v4()}>
          <span> name: {card.name}</span>
          <span> gender: {card.gender}</span>
          <span> hair_color: {card.hair_color}</span>
          <span> eye_color: {card.eye_color}</span>
        </li>
      ))}
    </ul>
  );
};

export { Cards };
