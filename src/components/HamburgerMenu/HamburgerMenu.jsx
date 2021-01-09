import React from "react";
import styled from "styled-components";

const HamburgerMenu = () => {
  return (
    <HamMenu>
      <p>this is the ham menu</p>
    </HamMenu>
  );
};

export default HamburgerMenu;

// const expand = keyframes`
//     0% {
//       right: 100%;
//     }
//     50% {
//       right: 75%;
//     }
//     100% {
//       right: 50%;
//     }
// `;

const HamMenu = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: purple;
    /* animation-duration: 0.3s;
    animation-timing-function: linear; */
  }
`;
