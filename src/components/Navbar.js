import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

function Navbar() {
  return (
    <Nav>
      <h1>Behold my Kanban Board</h1>
      <Ul>
        <li>Configuration & Theming</li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
