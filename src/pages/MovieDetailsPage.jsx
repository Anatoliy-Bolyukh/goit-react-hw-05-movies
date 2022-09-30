import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../MoviesAPI/moviesApi';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

  useEffect(() => {
    movieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

    return (
        <>
            {movie &&<MovieDetails movie={movie} />}
        </>
  ) 
};

export default MovieDetailsPage;
