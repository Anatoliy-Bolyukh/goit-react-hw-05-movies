import { useState } from 'react'

const MoviesSearchForm = ({setSearch}) => {
  const [searchMovies, setSearchMovies] = useState('');

  const hendleChange = (event) => {
  setSearchMovies(event.currentTarget.value.toLowerCase())
}

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearch({ query: searchMovies, page: 1})
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchInput"
        value={searchMovies}
        onChange={hendleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesSearchForm;