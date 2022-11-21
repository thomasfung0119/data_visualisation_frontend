import React from "react";
import "./button.css";

let assetsPath = require.context("./", false, /\.(png|jpe?g|svg)$/);

function Button({ imageURL, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <img className="Image" src={assetsPath(imageURL)} />
    </button>
  );
}

export default Button;
