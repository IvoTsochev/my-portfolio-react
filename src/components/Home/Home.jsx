import React from "react";
import "./Home.scss";
import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: 5rem;
  z-index: 10;
`;

function Home() {
  return (
    <div id="home">
      <div className="home-info">
        <MainTitle>Ivaylo Tsochev</MainTitle>
      </div>
      <div className="home-overlay"></div>
    </div>
  );
}

export default Home;
