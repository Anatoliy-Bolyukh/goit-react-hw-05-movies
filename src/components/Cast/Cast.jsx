const Cast = ({ movieCast }) => {
  console.log(movieCast);

  return (
    <ul>
      {movieCast.map(
        ({ character, cast_id, name, popularity, profile_path }) => {
          return (
            <li key={cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="dasfas"
                  /> 
                  <p>{name}{ popularity}</p>
                  <p>{character}</p>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Cast;
