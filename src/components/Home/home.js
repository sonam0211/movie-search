import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovieList } from "../../data/action";
import SearchResult from "../SearchResult/searchResult";
import "./home.css";

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchState, setSearchState] = useState("");
  const [searchData, setSearchData] = useState([]);
  let movieList = [];

  useSelector((state) => {
    movieList = state.movies.movieList.data;
  });

  const searchResult = () => {
    const searchData = movieList?.filter((item) => {
      return item.movie_title.toLowerCase().includes(searchState);
    });

    setSearchData(searchData);
  };

  return (
    <>
      <div className="home-container">
        {" "}
        <input
          className="input-box"
          onChange={(e) => {
            setSearchState(e.target.value);
            searchResult();
          }}
          value={searchState}
          placeholder="Search your movie here"
        />
        <button className="search-button" onClick={searchResult}>
          Search
        </button>
      </div>

      {searchState && <SearchResult searchData={searchData} />}
    </>
  );
};

export default Home;
