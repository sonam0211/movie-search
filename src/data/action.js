import axios from "axios";

export const fetchMovieList = () => async (dispatch) => {
  const response = await axios.get("https://demo2837922.mockable.io/movies");
  dispatch({ type: "FETCH_MOVIE_LIST", payload: response });
};

export const fetchMovieDetail = (id) => async (dispatch) => {
  const response = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`
    )
    .catch((error) => dispatch({ type: "FETCH_MOVIE_DETAIL", payload: {} }));
  dispatch({ type: "FETCH_MOVIE_DETAIL", payload: response });
};

export const fetchPosterData = (data) => async (dispatch) => {
  const response = await axios.get(`https://image.tmdb.org/t/p/w500${data}`);
  dispatch({ type: "FETCH_POSTER_DATA", payload: response });
};
