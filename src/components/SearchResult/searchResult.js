import React from "react";
import { Link } from "react-router-dom";
import "./searchResult.css";

const SearchResult = (props) => {
  return props.searchData?.map((item, index) => {
    return (
      <div key={`${index}movie`} className="searchContainer">
        <div className="item">
          <Link to={{ pathname: "/movieDetail", props: { movieItem: item } }}>
            {item.movie_title}
          </Link>
        </div>
      </div>
    );
  });
};

export default SearchResult;
