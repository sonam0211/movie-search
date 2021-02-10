import React from "react";
import "./Input.css";

const Input = ({ value, placeholder, onChange }) => {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        className="input-box"
        onChange={onChange}
      />
    </>
  );
};

export default Input;
