import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovie } from 'Fetch_API';
import { useEffect, useState } from 'react';
import { List, MovieList } from './MoviesPage.style';

const MoviePage = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    try {
      const fetchMovie = async () => {
        const response = await getMovie(movieID);
        console.log(response);
        setMovie(response);
      };
      fetchMovie();
    } catch (error) {
      console.warn(error);
    }
  }, [movieID]);

  return (
    <>
      <MovieList>
        <li>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={300}
            />
          )}
        </li>
        <li>
          <h2>{movie.title}</h2>
          <p>User Score: {`${movie.popularity * 100}%`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres && (
            <List>
              {movie.genres.map(genre => {
                return (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                );
              })}
            </List>
          )}
        </li>
      </MovieList>

      <h3>Additional information</h3>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      <Outlet />
    </>
  );
};

export default MoviePage;
