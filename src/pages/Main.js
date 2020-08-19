import React, { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import Search from "../components/Search";
import Products from "../components/Products";

const Main = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("camiseta");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      if (query.length >= 3) {
        const response = await api.get(`${query}`);

        setItems(response.data.items);
        setIsLoading(false);
      } else if (query.length === 0) {
        setItems([]);
        setQuery("camiseta");
      }
    };
    fetchItems();
  }, [query]);

  console.log(query);

  return (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <Products items={items} isLoading={isLoading} />
    </>
  );
};

export default Main;
