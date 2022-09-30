import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  BtnBack,
  Image,
  Title,
  NavBtn,
  BtnWrap,
} from './movieDetails.style';

const MovieDetails = ({ movie }) => {
  const { original_title, id, poster_path, overview, genres, vote_average } = movie;

  // const navigate = useNavigate();

  const genreName = () => {
    return genres.map(({ name }) => name);
  };

  const rating = () => {
    return Math.round((vote_average * 100) / 10);
  };

  return (
    <>
      <div>
        <BtnBack to={-1}>НАЗАД</BtnBack>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="dasdas"
        />
        <Title>{original_title}</Title>
        <p>Use Score:{rating()}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genreName()}</p>
      </div>
      <BtnWrap>
        <NavBtn to={`/movies/${id}/cast`}>Cast</NavBtn>
        <NavBtn to={`/movies/${id}/reviews`}>Reviews</NavBtn>
      </BtnWrap>
      <Suspense fallback = {'CastOutlet'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
