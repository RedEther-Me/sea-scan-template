import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const SNavbar = props => {
  return (
    <Navbar color="light" light className="mb-4">
      <Container>
        <NavbarBrand tag={Link} to="/">SeaSearch</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/upload">Upload</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SNavbar;
