import React from "react";
import styled from "styled-components";

export default function BreadCrumbs({ children }) {
  return (
    <nav>
      <BreadCrumbList>{children}</BreadCrumbList>
    </nav>
  );
}

const BreadCrumbList = styled.ol`
  list-style: none;
`;
