import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: black;
    text-align: center;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
  height: 400px;
  border: 1px solid #eee;
  margin: 10px;

  border-radius: 10px;

  h3 {
    margin-top: 15px;
  }

  img {
    width: 100%;
  }

  h1 {
    margin-bottom: 25px;
    color: #ffbe00;
  }

  &:hover {
    border-color: #ffbe00;
  }
`;
