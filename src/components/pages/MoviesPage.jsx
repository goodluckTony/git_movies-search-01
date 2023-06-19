import React from 'react';
import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { getSearch } from "../utils/moviesAPI";

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const handleChange = (e) => setQuery(e.target.value);

  const movieSearch = useCallback(
    _.debounce(
      (query) => getSearch(query).then(({ results }) => setMoviesList(results)), 
      300,
    ),
    [],
  );

  useEffect(() => {
    if (!query) return;
    movieSearch(query);
  }, [query, movieSearch]);

  return (
    <div>
      <h4>Search</h4>
      <input 
        type="text"
        value={query}
        onChange={handleChange}
      />
      <ul>
        {moviesList.map(({ id, original_title }) => (
          <li key={id}>{original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;