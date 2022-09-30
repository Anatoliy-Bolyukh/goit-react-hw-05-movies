import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../MoviesAPI/moviesApi';
import Reviews from '../components/Reviews/Reviews';

const ReviewsPage = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => setMovieReviews(data.results));
  }, [movieId]);

  return (
    <>
      <Reviews movieReviews={movieReviews} />
    </>
  );
};

export default ReviewsPage;
