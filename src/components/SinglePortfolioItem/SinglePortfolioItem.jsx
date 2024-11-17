import { useState } from "react";
import "./SinglePortfolioItem.scss";
import axios from "axios";

const SinglePortfolioItem = ({ singlePortfolio }) => {
  const { title, excerpt, featured_media, acf } = singlePortfolio;

  //   State
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");

  //   FEATURE IMAGE REQUEST
  axios
    .get(
      `https://api.ivaylotsochev.com/wp-json/wp/v2/media/${featured_media}`
    )
    .then((res) => {
      setFeaturedImageUrl(res.data.media_details.sizes.medium.source_url);
    });

  return (
    <div className="singlePortfolioItem">
      <a href={ acf.project_url } target='_blank' rel="noreferrer">
        <h4>{ title.rendered }</h4>
        <img className="singlePortfolioItem-img" src={ featuredImageUrl } alt="" />
        <div dangerouslySetInnerHTML={ { __html: excerpt.rendered } } />
        <p>Project type: { acf.type }</p>
        <p>Build on: { acf.build_on }</p>
        <p>Used technologies: { acf.used_technologies }</p>
      </a>
    </div>
  );
};

export default SinglePortfolioItem;
