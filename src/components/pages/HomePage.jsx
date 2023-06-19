import React from 'react'
import { useState, useEffect } from "react";
import { getTrending } from "../utils/moviesAPI";
import { Link } from "react-router-dom";
// import  MovieDetailsPage  from "../pages/MovieDetailsPage";
// import { getMovieById } from '../utils/moviesAPI';

const HomePage = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = () => {
    getTrending()
    .then(data => {
      const movies = data.results || [];
      setTrendingList(movies);
    });
  };



  return (
    <div>
      <h4>Trending today</h4>

      <ul>
        {trendingList.map(({ id, original_title }) => (
          <li key={id}>
            <Link 
            to={`/movies/${id}`} 
            key={id}
            >
              {original_title}
            </Link>
          </li> 
        ))}
      </ul>
    </div>
  )
}

export default HomePage;