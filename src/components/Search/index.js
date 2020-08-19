import React, { useState } from "react";
import omeletLogo from "../../assets/omeletelogo.svg";

import { SearchContainer, SearchInput, Header, Logo } from "./styles";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <>
      <Header>
        <SearchContainer>
          <Logo src={omeletLogo} />
          <form>
            <SearchInput
              type="text"
              className="form-control"
              placeholder="Busque o produto"
              value={text}
              onChange={(e) => onChange(e.target.value)}
              autoFocus
            />
          </form>
        </SearchContainer>
      </Header>
    </>
  );
};

export default Search;
