import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: #7a918d;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  border-bottom: 10px solid #7a918d;
  background-color: #99c2a2;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 16px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Wrapper>
        <Logo>
          <a href="/">Vandelay Industries</a>
        </Logo>
        <Nav>
          <NavItem>
            <StyledNavLink href="/about">About</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink href="/factories">Factories</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink href="/warehouses">Warehouses</StyledNavLink>
          </NavItem>
        </Nav>
      </Wrapper>
    </HeaderStyles>
  );
}
