import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import queen from "../../../src/queen-name.jpg";

import "./header.css";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            src="https://i.pinimg.com/originals/e1/7b/ef/e17befde19dcb4c4890e01fcc19400d7.jpg"
            className="logo"
          />
        </Col>
        <Col>
          <Image src={queen} alt="queen" className="photo" />
        </Col>
        <Col>
          <Image
            src="https://i.pinimg.com/originals/e1/7b/ef/e17befde19dcb4c4890e01fcc19400d7.jpg"
            className="logo"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
