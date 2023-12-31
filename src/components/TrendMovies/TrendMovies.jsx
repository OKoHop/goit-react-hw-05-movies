import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './TrendMovies.style';
// import img from '../../images/await_img.jpg';

export const TrendMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title ? movie.title : movie.name}
                width={200}
              />
              <p>{movie.title ? movie.title : movie.name}</p>
            </Link>
          </MovieItem>
        );
      })}
    </ul>
  );
};
