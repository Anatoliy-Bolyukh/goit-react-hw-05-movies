import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import   { getTrending }   from '../MoviesAPI/moviesApi';
// import MoviesSearchForm from '../components/MoviesSearchForm/MoviesSearchForm';
import MovieList from '../components/MoviesList/MoviesList';
// import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';

const HomePage = () => {
  //  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);


   useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <>
      <h1>Home</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
