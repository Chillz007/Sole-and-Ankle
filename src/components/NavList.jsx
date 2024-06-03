import React from "react";
import styled from "styled-components";

export default function NavList({ children }) {
  return <NavWrap>{children}</NavWrap>;
}

export const NavWrap = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 35px;
`;
