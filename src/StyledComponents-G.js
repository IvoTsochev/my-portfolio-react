import styled from "styled-components";

export const H2Title = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 300;
  font-size: 2rem;
  &:after {
    content: "_______";
    color: rgb(22, 22, 222);
  }
`;
