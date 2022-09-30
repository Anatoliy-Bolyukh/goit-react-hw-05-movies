import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import AppBar from './AppBar/AppBar';
import ScrollToTop from 'react-scroll-to-top';

const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));


export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback = {'dasdas'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<CastPage />} />
            <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ScrollToTop smooth />
    </>
  );
};
