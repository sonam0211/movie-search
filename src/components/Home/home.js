import React, { useState } from "react";
import { useSelector } from "react-redux";

import SearchResult from "../SearchResult/searchResult";
import "./home.css";

import Button from "../Button/button";
import Input from "../Input-Box/Input";

const Home = (props) => {
  const [searchState, setSearchState] = useState("");
  const [searchData, setSearchData] = useState([]);

  const movieList = useSelector((state) => state.movies.movieList.data);

  const searchResult = () => {
    const movieData = movieList?.filter((item) => {
      return item.movie_title.toLowerCase().includes(searchState);
    });

    setSearchData(movieData.slice(0, 5));
  };

  return (
    <div className="home-flex">
      <div className="home-container">
        <Input
          onChange={(e) => {
            setSearchState(e.target.value);
            searchResult();
          }}
          value={searchState}
          placeholder="Search your movie here"
        />

        <Button text="search" onClick={searchResult} />
      </div>

      <div> {searchState && <SearchResult searchData={searchData} />}</div>
    </div>
  );
};

export default Home;
