import axios from 'axios';

const API_KEY = '89e6777c776a7c110eb0e0bc258b581b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async page => {
  try {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, {
      params: {
        page,
      },
    });
    return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchMovie = async (query, page) => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
      {
        params: {
          query: query,
          page,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const movieDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMovieCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}