import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constant/data";

export default function CategoryList({ href, children }) {
  return (
    <CategoryItem>
      <CategoryLink href={href}>{children}</CategoryLink>
    </CategoryItem>
  );
}

const CategoryLink = styled.a`
  list-style: none;
  text-decoration: none;
  font-family: "roboto";
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};

  &:hover {
    color: ${COLORS.primary};
  }
`;

const CategoryItem = styled.li`
  list-style: none;
  margin: 10px auto;

  text-decoration: none;
`;
