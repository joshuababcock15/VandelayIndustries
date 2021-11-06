import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: blue;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  border-bottom: 10px solid var(--black, black);
  display: grid;
  grid-template-columns: auto 1fr;
  /* justify-content: space-between; */
  /* align-items: stretch; */
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div>
        <Logo>
          <a href="/">Vandley Industries</a>
        </Logo>
        <a href="/Factories">Factories</a>
        <a href="/Warehouses">Warehouses</a>
      </div>
    </HeaderStyles>
  );
}
