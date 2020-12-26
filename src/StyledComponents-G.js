import styled from "styled-components";

export const H2Title = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 300;
  font-size: 3rem;
  &:after {
    content: "_______";
    color: rgb(30, 150, 230);
  }
`;
