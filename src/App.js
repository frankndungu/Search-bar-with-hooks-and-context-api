import React, { useEffect, useState } from "react";

import SearchBar from "./components/Layout/Header/SearchBar";
import MoviesList from "./components/Layout/Main/MoviesList";
import LoadingSpinner from "./components/UI/LoadingSpinner";

import useHttp from "./hooks/use-http";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const { sendRequest: fetchMovies, isLoading, error } = useHttp();

  useEffect(() => {
    const requestConfigObject = {
      url: `https://www.omdbapi.com/?apiKey=1183718b&s=${movieTitle}`,
    };
    fetchMovies(requestConfigObject, (returnedMovies) =>
      setMovies(returnedMovies.Search)
    );
  }, [fetchMovies, movieTitle]);

  const onSearch = (enteredMovieTitle) => {
    setMovieTitle(enteredMovieTitle);
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className="container searchApp">
          <SearchBar onSearch={onSearch} />
          <MoviesList movies={movies} error={error} />
        </div>
      )}
    </>
  );
}

export default App;
