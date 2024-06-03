import React from "react";
import CategoryList from "./CategoryList";
import { Category, SHOES } from "../constant/data";
import styled from "styled-components";
import CategoryImage from "./CategoryImage";

export default function Categories() {
  return (
    <nav style={{ display: "flex" }}>
      <CategoriesWrapper>
        {Category.map((item) => {
          return (
            <CategoryList key={item.id} href={item.href}>
              {item.name}
            </CategoryList>
          );
        })}
      </CategoriesWrapper>

      <ShoesWrapper>
        {SHOES.map((shoe) => {
          return (
            <CategoryImage key={shoe.id}>
              <div style={{ width: "350px", margin: "0 auto" }}>
                <img src={shoe.image} alt="shoes-img" />
              </div>
              <ShoeDetails>
                <ShoeName>{shoe.name}</ShoeName>
                <ShoePrice>{shoe.price}</ShoePrice>
              </ShoeDetails>
              <p> {shoe.numOfColors}</p>
            </CategoryImage>
          );
        })}
      </ShoesWrapper>
    </nav>
  );
}

const CategoriesWrapper = styled.ul`
  /* gap: 30px; */
`;

const ShoesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  margin-left: 30px;
`;

const ShoeName = styled.p`
  display: flex;
  justify-content: space-between;
`;

const ShoeDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 100%;
  padding: 10px;

`;

const ShoePrice = styled.p``;
