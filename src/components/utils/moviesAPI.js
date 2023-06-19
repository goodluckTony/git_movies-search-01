import axios from "axios";

const key = 'db72d38d20c1dc1059bf7641ac643add';
const baseURL = 'https://api.themoviedb.org/3';

export const getSearch = (query) => 
  axios 
    .get(`${baseURL}/search/movie?api_key=${key}&query=${query}`)
    .then(({ data }) => data);

export const getTrending = () =>
  axios 
    .get(`${baseURL}/trending/movie/day?api_key=${key}&media_type=movie`)
    .then(({ data }) => data);

export const getMovieById = (id) =>
  axios 
    .get(`${baseURL}/movie/${id}?api_key=${key}`)
    .then(({ data }) => data);

export const getMovieCredits = (id) => 
  axios 
    .get(`${baseURL}/movie/${id}/credits?api_key=${key}`)
    .then((data) => data);

export const getMovieReviews = (id) =>
  axios
    .get(`${baseURL}/movie/${id}/reviews?api_key=${key}`)
    .then((response) => response);