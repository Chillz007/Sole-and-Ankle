import React from "react";
import styled from "styled-components";
import NavList from "./NavList";
import { NavLink } from "../constant/data";
import NavItem from "./NavItem";
import "@fontsource/roboto/700.css";

export default function MainHeader() {
  return (
    <Nav>
      <Logo>Sole&Ankle</Logo>
      <nav>
        <NavList>
          {NavLink.map((nav) => {
            return (
              <NavItem key={nav.id} href={nav.href}>
                {nav.navName}
              </NavItem>
            );
          })}
        </NavList>
      </nav>
    </Nav>
  );
}

const Logo = styled.h1`
  font-family: "roboto";
  font-weight: 700;
  margin-right: 250px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 40px;
`;
