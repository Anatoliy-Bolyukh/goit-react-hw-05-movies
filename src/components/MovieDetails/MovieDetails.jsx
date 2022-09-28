import { NavLink, Outlet } from "react-router-dom";


const MovieDetails = ({ movie }) => {
    const { original_title,
        id,
        poster_path,
        overview,
        genres,
        vote_average,
    } = movie;
    // console.log(movie);
    
    const genreName = () => {
        return genres.map(({ name }) => name);
    };

    const rating = () => {
    return Math.round(vote_average * 100/ 10)
}
     
    return (
      <>
      <div>
          <NavLink to={'/movies/'} >
              НАЗАД
          </NavLink>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="dasdas"
      />
      <h1>{original_title}</h1>
      <p>Use Score:{rating()}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genreName()}</p>
         
            </div>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
            <Outlet/>
            </>
  );
};

export default MovieDetails;
