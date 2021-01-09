import React, { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
// Styles
import styled, { keyframes } from "styled-components";

const Hamburger = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  let openingHamHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamIcon onClick={openingHamHandler}>
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </HamIcon>
      {isOpen ? <HamburgerMenu /> : ""}
    </>
  );
};

export default Hamburger;

const HamIcon = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    z-index: 2;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 2%;
    right: 5%;
    .bar {
      width: 35px;
      height: 5px;
      background-color: rgb(30, 150, 230);
      margin: 6px 0;
      transition: 0.4s;
    }
  }
`;
