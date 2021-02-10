import React from "react";
import "./button.css";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button className="search-button" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
