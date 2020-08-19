import React, { useCallback, useState } from "react";
import omeletLogo from "../../assets/omeletelogo.svg";

import { SearchContainer, SearchInput, Header, Logo } from "./styles";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = useCallback(
    (q) => {
      setText(q);
      getQuery(q);
    },
    [getQuery]
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <Header>
        <SearchContainer>
          <Logo src={omeletLogo} />

          <form onSubmit={handleSubmit}>
            <SearchInput
              type="text"
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
