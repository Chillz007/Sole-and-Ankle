import React from "react";
import styled from "styled-components";

export default function Crumbs({ href, children }) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbWrapper>
  );
}

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  --opacity: 0.8;
  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: "/";
      margin-right: var(--spacing);
      opacity: var(--opacity);
    }
  }
`;

const CrumbLink = styled.a`
  text-decoration: none;
  color: inherit;
  opacity: var(--opacity);

  &:hover {
    text-decoration: revert;
  }
`;
