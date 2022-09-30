import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../MoviesAPI/moviesApi';
import Cast from 'components/Cast/Cast';

const CastPage = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => setMovieCast(data.cast));
  }, [movieId]);
    
  return (
    <>
          <Cast movieCast={ movieCast } />
    </>
  );
};

export default CastPage;
