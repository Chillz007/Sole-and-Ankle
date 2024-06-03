import React from "react";

export default function CategoryImage({ href, children }) {
  return (
    <li style={{ flex: "1 1" }}>
      <a href={href}>{children}</a>
    </li>
  );
}
