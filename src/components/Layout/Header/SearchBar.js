import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const [enteredMovieTitle, setEnteredMovie] = useState("");

  const movieInputHandler = (event) => {
    const enteredMovie = event.target.value;
    setEnteredMovie(enteredMovie);
  };

  const movieFormSubmitHandler = (event) => {
    event.preventDefault();
    props.onSearch(enteredMovieTitle);
    setEnteredMovie("");
  };

  return (
    <header>
      <h2 className="title is-2 has-text-centered">Sandbox search</h2>
      <form onSubmit={movieFormSubmitHandler}>
        <div className="control">
          <input
            className="input"
            onChange={movieInputHandler}
            type="text"
            value={enteredMovieTitle}
            placeholder="Search your movies"
          />
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
