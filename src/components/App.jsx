import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Movies } from '../pages/Movies/Movies';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={<Toaster position="top-center" reverseOrder={false} />}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieID" element={<MoviePage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
