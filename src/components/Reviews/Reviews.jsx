import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../utils/moviesAPI';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  author_style: {
    fontWeight: 'bold',
  },
  review_container: {
    margin: '30px',
  },
});

const Reviews = () => {
  const classes = useStyle();
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  const fetchMovieReviews = useCallback(() => {
    getMovieReviews(id)
    .then((res) => {
      const reviewsData = res.data.results;
      setMovieReviews(reviewsData);
    })
    .catch((error) => console.error(error))
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchMovieReviews()
    }
  }, [id, fetchMovieReviews]);

  // const { results } = movieReviews;

  if (!movieReviews) {
    return <div>We don't have any reviews for this movie</div>
  };
  
  console.log(movieReviews);

  return (
    <>
      <ul>
        {movieReviews.map((i) => (
          <li key={i.id}>
            <div className={classes.review_container}>
              <p className={classes.author_style}>Author: {i.author}</p>
              <p>{i.content}</p>
            </div> 
          </li>
        ))}
      </ul>
    </>  
  )
}

export default Reviews