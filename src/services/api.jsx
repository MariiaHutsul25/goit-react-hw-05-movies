import axios from "axios";

const API_KEY = "fa84220f1f9a5152653d3d7d5b11f1de";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async () => {
  const responce = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const trendingMovies = responce.data.results.map(({ id, title }) => {
    return { id, title };
  });
  return trendingMovies;
};

const fetchMovieById = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

const fetchReviews = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  const reviewsMovies = response.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
  return reviewsMovies;
};

const fetchCasts = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

const getMoviesQuery = async (query) => {
  const responceCasts = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return responceCasts.data.results;
};

export {
  fetchMovies,
  fetchMovieById,
  fetchCasts,
  fetchReviews,
  getMoviesQuery,
};
