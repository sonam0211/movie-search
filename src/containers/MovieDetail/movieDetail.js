import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovieDetail } from "../../data/action";
import "./movieDetail.css";

const MovieDetail = (props) => {
  const dispatch = useDispatch();

  const movieId = props.location?.props?.movieItem?.movie_imdb_link.split(
    "/"
  )[4];

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [movieId]);

  const posterPath = useSelector(
    (state) => state.movies?.movieDetail?.data?.poster_path
  );
  const overview =
    useSelector((state) => state.movies?.movieDetail?.data?.overview) ||
    "No Text Available";

  return (
    <div className="movie-detail-container">
      <img
        alt="Movie Poster"
        className="image-style"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://via.placeholder.com/295x295?text=Image+Not+Available`;
        }}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      ></img>
      <div className="text-style">{overview}</div>
    </div>
  );
};

export default MovieDetail;
