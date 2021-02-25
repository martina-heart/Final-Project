import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function MyMenu() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button variant="danger">Home</Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            About Us
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">History</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Dicography</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    </>
  );
}

export default MyMenu;
