import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  box-shadow: 1.2px 1.6px 5.8px 0.2px rgba(0, 0, 0, 0.19);

  @media (max-width: 700px) {
    flex-direction: column;
    height: 150px;
  }
`;

export const Logo = styled.img`
  flex-shrink: 1;
`;

export const SearchContainer = styled.div`
  height: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 60%;
    margin-left: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    form {
      margin: 15px;
    }

    img {
      margin-top: 50px;
    }
  }
`;

export const SearchInput = styled.input`
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ffbe00;
  border-radius: 50px;
  background: #f1f1f1;
  width: 100%;
`;
