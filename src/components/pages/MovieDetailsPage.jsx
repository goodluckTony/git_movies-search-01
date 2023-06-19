import React,{ useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, NavLink, Outlet } from "react-router-dom";
import { getMovieById } from '../utils/moviesAPI';
import { createUseStyles } from 'react-jss';
// import Cast from '../Cast';
// import Reviews from '../Reviews';

const useStyles = createUseStyles({
  mainInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  line: {
    top: '0',
    left: '0',
    width: '100%',
    height: '1px',
    backgroundColor: 'black',
    margin: '10px',
  },
});

const MovieDetailsPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const API_IMG = 'https://image.tmdb.org/t/p/w300';
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  // const [activeTab, setActiveTab] = useState(false);

  // Movie details
  const getMovieData = useCallback(() => {
    getMovieById(id) 
      .then((data) => setMovieData(data))
      .catch((error) => console.error(error))
  }, [id]);
  
  useEffect(()=> {
    if (id) {
      getMovieData();
    }  
  }, [id, getMovieData]);  
  
  if (!movieData) {
    return <div>Loading...</div>
  }
  console.log(id);
  
  const { original_title, vote_average, overview, poster_path, genres } = movieData;
  
  const decimalNum = vote_average;
  const intNum = Math.floor(decimalNum * 10);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div>
        <div className={classes.mainInfo}>
          <img src={API_IMG+poster_path} alt="poster" />
          <div >
            <h2>{original_title}</h2>
            <p>User Score: {intNum}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>

            {/* <ul>
              {genres.map((genre) => 
                <li key={genre.id}>{genre.name}</li>
              )}
            </ul> */}

            {genres && genres.length > 0 ? (
              <ul>
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            ) : (
              <p>No genres found</p>
            )}
          </div>
        </div>

        <div className={classes.line}></div>

        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink 
              to={`/movies/${id}/cast`}
              // isActive={() => activeTab === 'cast'}
              // onClick={() => setActiveTab('cast')}
              >
                Cast
              </NavLink>
            </li>

            <li>
              <NavLink 
              to={`/movies/${id}/reviews`}
              // isActive={() => activeTab === 'reviews'}
              // onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <div className={classes.line}></div>

          <Outlet />

          {/* {activeTab === 'cast' && (
            <div>
              <Cast />
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <Reviews />
            </div>
          )} */}

          {/* <Routes>
            <Route path='/movies/:id/cast' element={<Cast />} />
            <Route path='/movies/:id/reviews' element={<Reviews />} />
          </Routes> */}


        </div>
        {/* <div>
          <Route path='/movies/:id/cast' element={<Cast />} />
          <Route path='/movies/:id/reviews' element={<Reviews />} />
        </div> */}
      </div>
    </div>
  )
}

export default MovieDetailsPage;