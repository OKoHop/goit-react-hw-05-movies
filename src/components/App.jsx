import { Route, Routes, NavLink } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { Movies } from '../pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
