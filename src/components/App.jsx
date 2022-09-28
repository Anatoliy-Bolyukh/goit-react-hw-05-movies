import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetails from 'pages/MovieDetailsPage'
import CastPage from 'pages/CastPage'
import ReviewsPage from 'pages/ReviewsPage'

export const App = () => {
  return (
    <>
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/'>home</NavLink>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/movies" element={<MoviesPage />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<CastPage />}/>
          <Route path="/movies/:movieId/reviews" element={<ReviewsPage />}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  );
};
