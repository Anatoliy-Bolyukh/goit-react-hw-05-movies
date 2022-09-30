import PropTypes from 'prop-types';
import { List, Item, Img } from './Cast.style'
const Cast = ({ movieCast }) => {

  return (
    <List>
      {movieCast.map(
        ({ character, cast_id, name, popularity, profile_path }) => {
          return (
            <Item key={cast_id}>
              <Img
                src={profile_path?`https://image.tmdb.org/t/p/w500/${profile_path}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLE3diE0kppYY-j0N_QnFa48pJrmLl-WTXVVMWYCTWzs9oim8jHofUrCGQ08FW78NEzOs&usqp=CAU'}
                alt="dasfas"
                  /> 
                  <p>{name}{ popularity}</p>
                  <p>{character}</p>
            </Item>
          );
        }
      )}
    </List>
  );
};

Cast.propTypes = {
  movieCast: PropTypes.arrayOf(PropTypes.shape({
    character:  PropTypes.string,
    cast_id: PropTypes.string,
    name: PropTypes.string,
    popularity: PropTypes.string,
    profile_path: PropTypes.string,
  }))
}


export default Cast;
