import React from "react";
import styled from "styled-components";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { COLORS } from "../constant/data";

export default function TopHeader() {
  return (
    <TopContainer>
      <h3>Free shipping on domestic orders over $75!</h3>
      <ActionWrapper>
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search..." />
        <ActionLink href="#">Help</ActionLink>
        <LocalMallOutlinedIcon />
      </ActionWrapper>
    </TopContainer>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: hsl(220deg, 3%, 20%);
  padding: 5px 40px;
  color: hsl(0deg, 0%, 100%);
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  color: white;
`;

const ActionLink = styled.a`
  text-decoration: none;
  color: hsl(0deg, 0%, 70%);
`;
