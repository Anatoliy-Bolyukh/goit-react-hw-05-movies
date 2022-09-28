import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import   { searchMovie }   from '../MoviesAPI/moviesApi';
// import MoviesSearchForm from '../components/MoviesSearchForm/MoviesSearchForm';
import MovieList from '../components/MoviesList/MoviesList';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';


const MoviesPage = () => {
   
    const [search, setSearch] = useSearchParams();
    const [movies, setMovies] = useState([])

    const query = search.get('query');
    const page = search.get('page');
    console.log(search);
    
    useEffect(() => {
        if (!query) return;
        console.log(query);
        searchMovie(query, page).then((data) => setMovies(data.results));
        
  }, [query, page]);
    

    return (
        <>
            <MoviesSearchForm setSearch={setSearch} />
             <MovieList movies={movies}/>
        </>
)
 
}
 
export default MoviesPage