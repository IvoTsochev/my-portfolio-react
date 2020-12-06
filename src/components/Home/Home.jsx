import React from "react";
import "./Home.scss";

const mainTitle = styled.h1`
  font-size: 2rem;
`;

function Home() {
  return (
    <div id="home">
      <div className="home-overlay"></div>
      <div className="home-info"></div>
    </div>
  );
}

export default Home;
