import React from "react";
import { Dropdown, Button, Container } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./menu.css";

function MyMenu() {
  return (
    <>
      <Container fluid>
        <ButtonGroup className="mr-2">
          <Dropdown>
            <Button variant="danger">Home</Button>

            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              About Us
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">History</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Dicography</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              The Band
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-3">Freddie Mercury</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Brian May</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Roger Taylor</Dropdown.Item>
              <Dropdown.Item href="#/action-6">John Deacon</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Music
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-3">Live Music</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Compilations</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Concerts</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default MyMenu;
