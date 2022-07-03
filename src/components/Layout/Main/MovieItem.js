import React from "react";

function MovieItem(props) {
  const { movie } = props;
  return (
    <li className="resultCard">
      <figure className="image is-48x48">
        <img src={movie.Poster} alt={movie.Title} />
      </figure>
      <h4 className="bolder">{movie.Title}</h4>
      <span>
        <b>Year:</b>
        {movie.Year}
      </span>
    </li>
  );
}

export default MovieItem