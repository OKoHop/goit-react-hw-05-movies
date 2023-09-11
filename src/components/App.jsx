import { Route, Routes, NavLink } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { Movies } from '../pages/Movies/Movies';
import MoviePage from '../pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID" element={<MoviePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
