import React, { useState } from "react";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";

import MovieSource from "./api/MovieSource";

function App() {
  const [state, setState] = useState({
    results: [],
  });

  async function onSearch(text) {
    console.log(text);
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "1183718b" },
    });

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  }

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">Sandbox search</h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default App;
