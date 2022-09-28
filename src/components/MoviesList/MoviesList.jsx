import { Link } from 'react-router-dom';
import {Item, Img, List} from './moviesList.styled'

const MovieList = ({ movies }) => {

  return (
    <List>
      {movies && movies.map(({ id, original_title, poster_path }) => (
        <Item>
          <Link to={`/movies/${id}`} target="_blank">
            <Img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="error photo"
            />
          </Link>
          {original_title}
        </Item>
      ))}
    </List>
  );
};

export default MovieList;
