import React from "react";
import Card from "./MovieItem";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  return (
    <div className="results">
      {data.map((item) => (
        <Card key={item.imdbID} movie={item} />
      ))}
    </div>
  );
}

export default CardList;
