import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { LinkContainer } from 'react-router-bootstrap';


import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    position: fixed top;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = ({ location }) => {
  return (
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">SaladBowl</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />


      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link as={Link} to="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link as={Link} to="/login">Log in</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link as={Link} to="/register">Register</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Styles>
  )
}

// <Nav.Item><Nav.Link><Link to="/about">About</Link></Nav.Link></Nav.Item>
// <Nav.Item><Nav.Link><Link to="/login">Log in</Link></Nav.Link></Nav.Item>
// <Nav.Item><Nav.Link><Link to="/register">Register</Link></Nav.Link></Nav.Item>

//
// <Navbar expand="lg">
//   <Navbar.Brand href="/">SaladBowl</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//
//
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="ml-auto">
//       <NavItem componentClass={Link} href="/about" to="/about" active={location.pathname === '/about'}>About</NavItem>
//       <NavItem componentClass={Link} href="/login" to="/login" active={location.pathname === '/login'}>Login</NavItem>
//       <NavItem componentClass={Link} href="/register" to="/register" active={location.pathname === '/register'}>Register</NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>

//as={Link} to="/"
// <Nav className="ml-auto">
//   <LinkContainer to="/about">
//     <Nav.Item>About</Nav.Item>
//   </LinkContainer>
//
//   <LinkContainer to="/login">
//     <Nav.Item>Log In</Nav.Item>
//   </LinkContainer>
//
//   <LinkContainer to="/register">
//     <Nav.Item>Register</Nav.Item>
//   </LinkContainer>
// </Nav>

// <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
// <Nav.Item><Nav.Link href="/login">Log in</Nav.Link></Nav.Item>
// <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
