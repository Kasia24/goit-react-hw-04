import React from "react";
import "./LoadMoreBtn.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className="load-more" onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
