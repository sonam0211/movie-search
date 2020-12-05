import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";

import { fetchMovieList } from "../../data/action";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  return (
    <div className="header-container">
      <Link className="header-home" to="/">
        Home
      </Link>

      <Link className="header-home" to="/movieList">
        List
      </Link>
    </div>
  );
};

export default Header;
