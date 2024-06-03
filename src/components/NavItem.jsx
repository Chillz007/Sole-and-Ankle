import React from "react";
import styled from "styled-components";

export default function NavItem({ href, children }) {
  return (
    <li>
      <NavAnchor href={href}>{children}</NavAnchor>
    </li>
  );
}

const NavAnchor = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-family: "roboto";
  font-weight: 500;

  &:hover {
    color: revert;
  }
`;
