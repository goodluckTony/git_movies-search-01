import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

// import HomePage from './components/pages/HomePage';
// import MoviesPage from './components/pages/MoviesPage';
// import MovieDetailsPage from './components/pages/MovieDetailsPage';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

// const HomePage = lazy(() => import('./components/pages/HomePage'));
// const MoviesPage = lazy(() => import('./components/pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('./components/pages/MovieDetailsPage'));
// const Cast = lazy(() => import('./components/Cast'));
// const Reviews = lazy(() => import('./components/Reviews'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        // element: <HomePage />,
        Component: lazy(() => import('./components/pages/HomePage')),

        // label: 'Movies',
        // component: MoviesPage,
      },
      {
        path: '/movies',
        // element: <MoviesPage />,
        Component: lazy(() => import('./components/pages/MoviesPage')),

        // label: 'Movies',
        // component: MoviesPage,

      },
      {
        path: `/movies/:id`,
        // element: <MovieDetailsPage />,
        Component: lazy(() => import('./components/pages/MovieDetailsPage')),

        // label: 'MovieDetails',
        // component: MovieDetailsPage,
        children: [
          {
            path: `/movies/:id/cast`,
            element: <Cast/>
          },
          {
            path: `/movies/:id/reviews`,
            element: <Reviews/>
          },
        ]
      },

    ]
    // label: 'Home',
    // component: HomePage,
  },
 
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode> 

  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
);