import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import { createBrowserRouter } from "react-router-dom";

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/movies',
    label: 'Movies',
    component: MoviesPage,
  },
  // {
  //   path: `/movies/:id`,
  //   label: 'MovieDetails',
  //   component: MovieDetailsPage,
  // },
];

// const router = createBrowserRouter([]);

// export const movieDetailsPageRoute = [
//   {
//     path: `/movies/details`,
//     label: 'MovieDetails',
//     component: MovieDetailsPage,
//   }
// ];

// export const movieCredits = [
//   {
//     path: '/movies/:movieId/cast',
//     label: 'MovieCast',
//     component: Cast,
//   }
// ];

// export const movieReviews = [
//   {
//     path: '/movies/:movieId/reviews',
//     label: 'MovieCast',
//     component: Reviews,
//   }
// ];