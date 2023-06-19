import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../utils/moviesAPI';
import placeholder from './placeholder_image.png'; 

const Cast = () => {
  const API_IMG = 'https://www.themoviedb.org/t/p/w200';

  const [movieCast, setMovieCast] = useState();
  const { id } = useParams();
  
  
  const fetchMovieCast = useCallback(() => {
    getMovieCredits(id)
    .then((response) => {
      const castData = response.data;
      setMovieCast(castData);
    })
    .catch((error) => console.error(error))
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchMovieCast()
    }
  }, [id, fetchMovieCast]);

  if (!movieCast) {
    return <div>Loading...</div>
  }

  const { cast } = movieCast;

  return (
    <>
      <ul>
        {cast.map((i) => (
          <li key={i.id}>
            {i.character ? (
              <p>Character: {i.character}</p>
            ) : (
              <p>Character: N/A</p>
            )}
            {i.profile_path ? (
              <img src={API_IMG+i.profile_path} alt="Actor" />
            ) : (
              <img src={placeholder} width="200" alt="Actor" />
            )}
            <p>Name: {i.name}</p>
          </li>
        ))}  
      </ul>
    </>
  )
}

export default Cast;