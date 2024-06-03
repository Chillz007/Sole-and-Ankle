import React from "react";
import styled from "styled-components";

export default function OtherItems({ children, span }) {
  return (
    <ItemContainer>
      <Category>{children}</Category>
      <Sort>{children}</Sort>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.h2`
  margin-right: 400px;
`;

export const Sort = styled.p`
  span {
    margin-left: 5px;
    padding: 10px 30px;
    background-color: hsl(196deg, 4%, 80%);
    border-radius: 8px;
  }
`;
