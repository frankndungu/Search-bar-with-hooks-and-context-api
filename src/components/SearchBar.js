import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const [enteredMovie, setEnteredMovie] = useState("");

  const movieInputHandler = (event) => {
    const enteredMovie = event.target.value;
    setEnteredMovie(enteredMovie);
  };

  const movieFormSubmitHandler = (event) => {
    event.preventDefault();
    props.onSearch(enteredMovie);
    setEnteredMovie("");
  };

  return (
    <form onSubmit={movieFormSubmitHandler}>
      <div className="control">
        <input
          className="input"
          onChange={movieInputHandler}
          type="text"
          value={enteredMovie}
          placeholder="Search your movies"
        />
      </div>
    </form>
  );
}

export default SearchBar;
