import React from "react";
import { Link } from "react-router-dom";
import "./moviesPagination.css";

const MoviePagination = ({ currentMovie }) => {
  return currentMovie?.map((item, index) => {
    return (
      <>
        <span className="item">
          <Link to={{ pathname: "/movieDetail", props: { movieItem: item } }}>
            {item.movie_title}
          </Link>
        </span>
        <span className="item">{item.director_name}</span>
        <span className="item">{item.language}</span>
        <span className="item">{item.content_rating}</span>
        <span className="item">{`$ ${item.budget}`}</span>
        <span className="item">{item.title_year}</span>
      </>
    );
  });
};

export default MoviePagination;
