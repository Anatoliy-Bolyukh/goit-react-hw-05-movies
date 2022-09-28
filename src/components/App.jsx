import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetails from 'pages/MovieDetailsPage'

export const App = () => {
  return (
    <>
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/'>home</NavLink>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies:movieId" element={<MovieDetails />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
