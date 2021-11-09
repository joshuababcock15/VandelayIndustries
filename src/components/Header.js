import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem, NavLink } from 'reactstrap';

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
  background-color: yellow;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 16px;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Wrapper>
        <Logo>
          <a href="/">Vandley Industries</a>
        </Logo>
        <Nav>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/factories">Factories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/warehouses">warehouses</NavLink>
          </NavItem>
        </Nav>
      </Wrapper>
    </HeaderStyles>
  );
}
