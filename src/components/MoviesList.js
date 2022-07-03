import React from "react";
import MovieItem from "./MovieItem";

function MoviesList(props) {
  const { movies, error } = props;

  if (error) return <h1>{error}</h1>;

  if (!movies || movies.length === 0) return <h1>No selected movies</h1>;

  const moviesListElement = (
    <ul>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID}/>
      ))}
    </ul>
  );
  return <div className="results">{moviesListElement}</div>;
}

export default MoviesList;
