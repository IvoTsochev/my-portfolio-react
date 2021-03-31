import { useState, useEffect } from "react";
import "./Portfolio.scss";
import axios from "axios";
// Components
import SinglePortfolioItem from "../SinglePortfolioItem/SinglePortfolioItem";
// Styles
import { H2Title } from "../../StyledComponents-G";

const Portfolio = () => {
  // State
  const [Portfolios, setPortfolios] = useState([]);

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
      .catch((err) => console.error(`Sooomething went wrong ${err}`));
  }, []);

  return (
    <div id="portfolio">
      <div className="portfolio-wrapper">
        <H2Title>PORTFOLIO</H2Title>
        <p>
          Here you can see my past work & projects. Most of the clients are
          choosing the Wordpress CMS as it's easier to manage. Some of the
          projects are just DEMO projects build on React.
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
