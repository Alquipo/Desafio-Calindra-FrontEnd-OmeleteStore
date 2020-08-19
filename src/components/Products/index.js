import React from "react";
import Spinner from "../Spinner";

import { Container, ProductCard } from "./styles";

const Products = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <Container>
      {items.map((item) => (
        <a
          key={item.map.id}
          href={`https://store.omelete.com.br/${item.map.uri}`}
        >
          <ProductCard>
            <h3>{item.map.name}</h3>
            <img
              src={`https://static-store.worldticket.com.br/${item.map["images.url"][0]}`}
              alt="Imagem do produto"
            />
            <h1>
              {item.map.salePrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h1>
          </ProductCard>
        </a>
      ))}
    </Container>
  );
};

export default Products;
