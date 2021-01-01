import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import axios from "axios";
// Components
import SinglePortfolioItem from "../SinglePortfolioItem/SinglePortfolioItem";
// Styles
import { H2Title } from "../../StyledComponents-G";

const Portfolio = () => {
  // State
  const [Portfolios, setPortfolios] = useState([]);
  const [IsLoaded, setIsLoaded] = useState(false);

  // portfolios URL
  const baseURL =
    "https://resources.ivaylotsochev.com/wp-json/wp/v2/portfolios";

  // fetching portfolios
  // Effect
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setPortfolios(res.data);
      })
      .then(setIsLoaded(true))
      .catch((err) => console.error(`Sooomething went wrong ${err}`));
  }, []);

  return (
    <div id="portfolio">
      <div className="portfolio-wrapper">
        <H2Title>PORTFOLIO</H2Title>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="singlePortfolioItem-wrapper">
          {Portfolios.map((item) => (
            <SinglePortfolioItem key={item.id} singlePortfolio={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
