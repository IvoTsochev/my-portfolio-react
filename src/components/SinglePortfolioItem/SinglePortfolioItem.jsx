import React from "react";
import "./SinglePortfolioItem.scss";
import axios from "axios";

const SinglePortfolioItem = ({ singlePortfolio }) => {
  const { title, excerpt } = singlePortfolio;

  return (
    <div>
      <h4>{title.rendered}</h4>
      <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
    </div>
  );
};

export default SinglePortfolioItem;
