import React, { useState } from "react";

import { SearchContainer, SearchInput } from "./styles";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <SearchContainer>
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
  );
};

export default Search;
