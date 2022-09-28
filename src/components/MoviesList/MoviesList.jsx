import {Item, Img, List} from './moviesList.styled'

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ url, original_title, poster_path }) => (
        <Item>
          <a href={url} target="_blank">
            <Img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="error photo"
            />
          </a>
          {original_title}
        </Item>
      ))}
    </List>
  );
};

export default MovieList;
