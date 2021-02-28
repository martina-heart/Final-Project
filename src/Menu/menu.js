import React from "react";
import { Button, Navbar, NavDropdown } from "react-bootstrap";
import { MDBIcon } from "mdbreact";

import "./menu.css";

function MyMenu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Button variant="danger">
          <MDBIcon icon="home" />
          Home
        </Button>

        <NavDropdown title="About Us" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Discography</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="The Band" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            Freddie Mercury
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Brian May</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Roger Taylor</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">John Deacon</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Music" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Live Music</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Compilations</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Concerts</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </>
  );
}

export default MyMenu;
