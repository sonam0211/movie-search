import React, { useState } from "react";
import { useSelector } from "react-redux";

import MoviePagination from "../../components/MoviesPagination/moviesPagination";
import Pagination from "../../components/Pagination/pagination";
import "./movieList.css";

const MovieList = () => {
  const theads = [
    { name: "Movie Title", toggleState: false, toggleValue: "movie_title" },
    { name: "Director Name", toggleState: false, toggleValue: "director_name" },
    { name: "Language", toggleState: false, toggleValue: "language" },
    {
      name: "Content Rating",
      toggleState: false,
      toggleValue: "content_rating",
    },
    { name: "Budget", toggleState: false, toggleValue: "budget" },
    { name: "Title year", togglestate: false, toggleValue: "title_year" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleTable, setToggleTable] = useState(theads);
  const moviePerPage = 5;

  const movieList = useSelector((state) => state.movies.movieList.data);

  const [showCurrentMovie, setShowCurrentMovie] = useState(
    movieList?.slice(0, 5)
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

  const toggleIcon = (name, toggleValue, index) => {
    const selectedHead = toggleTable[index];
    selectedHead.toggleState = !selectedHead.toggleState;
    toggleTable[index] = selectedHead;

    setToggleTable(toggleTable);
    sortList(toggleValue, selectedHead.toggleState);
  };

  const sortList = (sortItem, toggle) => {
    console.log(toggle);
    let sh = [...showCurrentMovie];
    sh.sort((a, b) => {
      let fa = a[sortItem].toLowerCase();
      let fb = b[sortItem].toLowerCase();

      if (toggle) {
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
      <div className="grid">
        {toggleTable.map((thead, index) => {
          return (
            <span className="table-heading" key={`thead ${index}`}>
              <span
                className="pointer"
                onClick={() => toggleIcon(thead.name, thead.toggleValue, index)}
              >
                <div
                  className={
                    thead.toggleState ? "icon-style " : "icon-style-rotate"
                  }
                >
                  <i className="fa fa-sort-desc"></i>
                </div>

                <div>
                  <strong>{thead.name}</strong>
                </div>
              </span>
            </span>
          );
        })}
        <MoviePagination currentMovie={showCurrentMovie}></MoviePagination>
      </div>

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
