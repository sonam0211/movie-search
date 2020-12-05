import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovieDetail } from "../../data/action";
import "./movieDetail.css";

const MovieDetail = (props) => {
  const dispatch = useDispatch();
  let posterPath = null;
  let overview = "";
  const movieId = props.location?.props?.movieItem?.movie_imdb_link.split(
    "/"
  )[4];

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);

  posterPath = useSelector(
    (state) => state.movies?.movieDetail?.data?.poster_path
  );

  overview =
    useSelector((state) => state.movies?.movieDetail?.data?.overview) ||
    "Error";

  return (
    <div className="movie-detail-container">
      <img
        alt="Movie Poster"
        className="image-style"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      ></img>
      <div className="text-style">{overview}</div>
    </div>
  );
};

export default MovieDetail;
