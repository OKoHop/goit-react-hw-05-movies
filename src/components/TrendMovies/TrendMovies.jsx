import img from '../../images/await_img.jpg';

export const TrendMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <img
              src={img}
              alt={movie.title ? movie.title : movie.name}
              width={200}
            />
            <p>{movie.title ? movie.title : movie.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
