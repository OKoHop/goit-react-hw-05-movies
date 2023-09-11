import { Link } from 'react-router-dom';
// import img from '../../images/await_img.jpg';

export const TrendMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title ? movie.title : movie.name}
                width={200}
              />
              <p>{movie.title ? movie.title : movie.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
