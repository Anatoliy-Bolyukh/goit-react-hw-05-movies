import { useState } from 'react'
import { MoviesForm, MoviesInput, MoviesBtn, BtnIcon } from './moviesSearchForm.style';

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
    <MoviesForm onSubmit={handleSubmit}>
      <MoviesInput
        autoComplete='off'
        type="text"
        name="searchInput"
        value={searchMovies}
        onChange={hendleChange}
      />
      <MoviesBtn type="submit">
        <BtnIcon>Search</BtnIcon>
      </MoviesBtn>
    </MoviesForm>
  );
};

export default MoviesSearchForm;