import { combineReducers } from "redux";
import movieListReducer from "./fetchMovieReducer";

export default combineReducers({
  movies: movieListReducer,
});
