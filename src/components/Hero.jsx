import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Crumbs from "./Crumbs";
import { Category, Sort } from "./OtherItems";
import styled from "styled-components";
import Categories from "./Categories";

export default function Hero() {
  return (
    <div>
      <HeroWrapper>
        <BreadCrumbs>
          <Crumbs href="/">Home</Crumbs>
          <Crumbs href="/">Sales</Crumbs>
          <Crumbs href="/">Shoes</Crumbs>
        </BreadCrumbs>
        <Category>Running</Category>
        <Sort>
          Sort <span>Newest Releases</span>
        </Sort>
      </HeroWrapper>
      <Categories />
    </div>
  );
}

const HeroWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  align-items: center;
  /* justify-content: space-between; */
  gap: 200px;
`;
