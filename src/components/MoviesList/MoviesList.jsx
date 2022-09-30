import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { Item, Img, List, Title } from './moviesList.styled';

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies &&
        movies.map(({ id, original_title, poster_path }) => (
          <Item>
            <Link to={`/movies/${id}`}>
              <Img
                src={poster_path ?`https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://i.imgur.com/4wcCtZe.jpeghttps://i.imgur.com/4wcCtZe.jpeg' }
                alt="error photo"
              />
            </Link>
            <Title>{original_title}</Title>
          </Item>
        ))}
    </List>
  );
};

export default MovieList;
