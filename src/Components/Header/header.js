import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import queen from "../../Images/download1.png";
import queen1 from "../../Images/download.png";

import "../Header/header.css";

const Header = () => {
  return (
    <div className="d-flex bd-highlight example-parent">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Image src={queen1} className="logo" fluid />
          </Col>
          <Col>
            <Image src={queen} alt="queen" className="photo" fluid />
          </Col>
          <Col>
            <Image src={queen1} className="logo" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
