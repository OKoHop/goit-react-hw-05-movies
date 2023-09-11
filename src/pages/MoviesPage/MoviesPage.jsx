import { Link, useParams } from 'react-router-dom';
import { getMovie } from 'Fetch_API';
import { useEffect, useState } from 'react';

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
      <ul>
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
            <ul>
              {movie.genres.map(genre => {
                return (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      </ul>

      <p>Additional information</p>
      <ul>
        <li>
          <Link to="/movies/:moviesID/cast">Cast</Link>
        </li>
        <li>
          <Link to="/movies/:moviesID/reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MoviePage;
