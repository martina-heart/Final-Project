import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { MDBIcon } from "mdbreact";

class MyMenu extends React.Component {
  render() {
    return (
      <>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/home">
                <MDBIcon icon="home" /> Home
              </NavLink>

              <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/about-us/history">History</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/about-us/discography">Discography</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title=" The Band" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/the-band/freddie-mercury">
                    Freddie Mercury
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/the-band/brian-may">Brian May</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/the-band/roger-taylor">Roger Taylor</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/the-band/john-deacon">John Deacon</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Music" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/music/live-music">Live Music</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/music/compilations">Compilations</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/music/concerts">Concerts</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default MyMenu;
