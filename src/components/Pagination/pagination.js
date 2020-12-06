import React, { useState } from "react";
import "./pagination.css";

const Pagination = ({ totalMovie, moviePerPage, fetchNumber, currentPage }) => {
  const movieArray = [];

  let initialMovieArray = [];

  for (let i = 1; i <= Math.ceil(totalMovie / moviePerPage); i++) {
    movieArray.push(i);
    if (i < 6) {
      initialMovieArray.push(i);
    }
  }

  let [currentNumber, setCurrentNumber] = useState(initialMovieArray);

  const getNextNumber = () => {
    const showCurrentNumber = currentNumber.map((num) => {
      if (num <= movieArray.length) {
        return num + 10;
      } else {
        return num;
      }
    });

    setCurrentNumber(showCurrentNumber);

    fetchNumber(showCurrentNumber[0]);
  };

  const getPreviousNumber = () => {
    const showCurrentNumber = currentNumber.map((num) => {
      if (num >= 6) {
        return num - 5;
      } else {
        return num;
      }
    });
    setCurrentNumber(showCurrentNumber);

    fetchNumber(showCurrentNumber[showCurrentNumber.length - 1]);
  };

  const handleNextButton = () => {
    const getCurrentPage = currentPage + 1;
    if (currentNumber[4] >= getCurrentPage) {
      fetchNumber(getCurrentPage);
    }
  };

  const handlePreviousButton = () => {
    const getCurrentPage = currentPage - 1;
    if (currentNumber[0] <= getCurrentPage) {
      fetchNumber(getCurrentPage);
    }
  };

  const getPagination = () => {
    return currentNumber.map((number) => {
      return (
        <div key={`${number} list`}>
          <div className="listStyle">
            {
              <button
                className={
                  currentPage === number ? "nextButton" : "button-style"
                }
                onClick={() => fetchNumber(number)}
              >
                {number}
              </button>
            }
          </div>
        </div>
      );
    });
  };

  return (
    <div className="numberContainer">
      <button className="button-style" onClick={handlePreviousButton}>
        Prev
      </button>
      <button className="button-style" onClick={getPreviousNumber}>
        {"<<"}
      </button>
      {getPagination()}
      <button className={`button-style `} onClick={getNextNumber}>
        {">>"}
      </button>
      <button className="button-style" onClick={handleNextButton}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
