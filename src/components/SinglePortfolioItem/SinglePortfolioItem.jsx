import React, { useState } from "react";
import "./SinglePortfolioItem.scss";
import axios from "axios";

const SinglePortfolioItem = ({ singlePortfolio }) => {
  const { title, excerpt, featured_media } = singlePortfolio;

  //   State
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");

  //   FEATURE IMAGE REQUEST
  axios
    .get(
      `https://resources.ivaylotsochev.com/wp-json/wp/v2/media/${featured_media}`
    )
    .then((res) => {
      setFeaturedImageUrl(res.data.media_details.sizes.medium.source_url);
    });

  return (
    <div className="singlePortfolioItem">
      <h4>{title.rendered}</h4>
      <img className="singlePortfolioItem-img" src={featuredImageUrl} alt="" />
      <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
    </div>
  );
};

export default SinglePortfolioItem;
