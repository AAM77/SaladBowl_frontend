import React from 'react';
import { Nav, Navbar, NavDropdown, Dropdown, NavItem } from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';
//import { LinkContainer } from 'react-router-bootstrap';


import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    position: fixed top;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #efefef;

    &:hover {
      color: white;
    }

    &:focus {
      color: #f57653;
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
          <Nav.Item><Nav.Link as={Link} to="/login">Log In</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link as={Link} to="/register">Register</Nav.Link></Nav.Item>
          <Dropdown as={NavItem} >
            <Dropdown.Toggle as={NavLink}>Salad Options</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/users/1">Suggest Breakfast Bowls</Dropdown.Item>
              <Dropdown.Item as={Link} to="/users/2">Suggest Lunch Bowls</Dropdown.Item>
              <Dropdown.Item as={Link} to="/users/3">Suggest Dinner Bowls</Dropdown.Item>
              <Dropdown.Item as={Link} to="/users/4">Suggest a Salad Bar</Dropdown.Item>
              <Dropdown.Item as={Link} to="/users/5">Create a Custom Bowl</Dropdown.Item>
              <Dropdown.Item as={Link} to="/users/6">Customize Preferences</Dropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Divider />
              <Dropdown.Item as={Link} to="/users/7">Favorite Bowls</Dropdown.Item>
              <Dropdown.Item as={Link} to="/users/8">Account</Dropdown.Item>
              <Dropdown.Item as={Link} to="/logout">Log Out</Dropdown.Item>



            </Dropdown.Menu>
          </Dropdown>;
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Styles>
  )
}
