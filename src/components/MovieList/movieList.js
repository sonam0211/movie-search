import React, { useState } from "react";
import { useSelector } from "react-redux";

import MoviePagination from "../MoviesPagination/moviesPagination";
import Pagination from "../Pagination/pagination";
import "./movieList.css";

const MovieList = () => {
  let initialToggleState = {
    title: false,
    name: false,
    language: false,
    rating: false,
    budget: false,
    year: false,
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleState, setToggleState] = useState(initialToggleState);
  const moviePerPage = 10;
  let movieList = [];

  useSelector((state) => {
    movieList = state.movies.movieList.data;
  });

  const [showCurrentMovie, setShowCurrentMovie] = useState(
    movieList?.slice(0, 10)
  );

  const fetchNumber = (number) => {
    setCurrentPage(number);

    const indexOfLastMovie = number * moviePerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;

    const findCurrentMovie = movieList?.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );
    setShowCurrentMovie(findCurrentMovie);
  };

  const { title, name, language, rating, budget, year } = toggleState;
  const toggleIcon = (type, value) => {
    setToggleState({ ...toggleState, [type]: !value });
  };

  const sortList = (sortItem) => {
    let sh = [...showCurrentMovie];
    sh.sort((a, b) => {
      let fa,
        fb,
        val = null;
      switch (sortItem) {
        case "director_name":
          fa = a.director_name.toLowerCase();
          fb = b.director_name.toLowerCase();
          val = name;
          break;
        case "movie_title":
          fa = a.movie_title.toLowerCase();
          fb = b.movie_title.toLowerCase();
          val = title;
          break;
        case "language":
          fa = a.language.toLowerCase();
          fb = b.language.toLowerCase();
          val = language;
          break;
        case "content_rating":
          fa = a.content_rating.toLowerCase();
          fb = b.content_rating.toLowerCase();
          val = rating;
          break;
        case "budget":
          fa = a.budget.toLowerCase();
          fb = b.budget.toLowerCase();
          val = budget;
          break;

        case "title_year":
          fa = a.title_year.toLowerCase();
          fb = b.title_year.toLowerCase();
          val = year;
          break;
        default:
          fa = null;
          fb = null;
      }
      if (val) {
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      } else {
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      }
    });
    setShowCurrentMovie(sh);
  };

  return (
    <div>
      <div className="container">
        <div onClick={() => sortList("movie_title")} className="item-list">
          <span
            onClick={() => toggleIcon("title", title)}
            className={title ? "icon-style" : "icon-style-rotate"}
          >
            {"<"}
          </span>
          <span> Movie Title</span>
        </div>
        <div onClick={() => sortList("director_name")} className="item-list">
          <span
            onClick={() => toggleIcon("name", name)}
            className={name ? "icon-style" : "icon-style-rotate"}
          >
            {"<"}
          </span>
          <span>Director Name</span>
        </div>
        <div onClick={() => sortList("language")} className="item-list">
          <span
            onClick={() => toggleIcon("language", language)}
            className={language ? "icon-style" : "icon-style-rotate"}
          >
            {"<"}
          </span>
          <span>Language</span>
        </div>
        <div onClick={() => sortList("content_rating")} className="item-list">
          <span
            onClick={() => toggleIcon("rating", rating)}
            className={rating ? "icon-style" : "icon-style-rotate"}
          >
            {"<"}
          </span>
          <span>Content Rating</span>
        </div>
        <div onClick={() => sortList("budget")} className="item-list">
          <span
            onClick={() => toggleIcon("budget", budget)}
            className={budget ? "icon-style" : "icon-style-rotate"}
          >
            {"<"}
          </span>
          <span>Budget</span>
        </div>
        <div onClick={() => sortList("title_year")} className="item-list">
          <span
            onClick={() => toggleIcon("year", year)}
            className={year ? "icon-style" : "icon-style-rotate"}
          >
            {"<"}
          </span>
          <span>Title Year</span>
        </div>
      </div>
      <MoviePagination currentMovie={showCurrentMovie}></MoviePagination>
      <Pagination
        moviePerPage={moviePerPage}
        totalMovie={movieList?.length}
        fetchNumber={fetchNumber}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MovieList;
