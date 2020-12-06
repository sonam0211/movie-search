import React from "react";
import { Link } from "react-router-dom";
import "./moviesPagination.css";

const MoviePagination = ({ currentMovie }) => {
  const fetchList = () => {
    return currentMovie?.map((item, index) => {
      return (
        <div key={`${index}movie`} className="pagination-container">
          <div className="item">
            <Link to={{ pathname: "/movieDetail", props: { movieItem: item } }}>
              {item.movie_title}
            </Link>
          </div>
          <div className="item">{item.director_name}</div>
          <div className="item">{item.language}</div>
          <div className="item">{item.content_rating}</div>
          <div className="item">{`$ ${item.budget}`}</div>
          <div className="item">{item.title_year}</div>
        </div>
      );
    });
  };

  return <div>{fetchList()}</div>;
};

export default MoviePagination;
