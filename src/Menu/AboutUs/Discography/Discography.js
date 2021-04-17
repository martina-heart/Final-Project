import React from "react";

import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";

import Album from "../../../Images/CSP.png";
import DatatablePage from "./Discography.component";

function Discography() {
  return (
    <>
      <div>
        <h1 className="his"> Discography</h1>
        <Image src={Album} fluid className="center" />
        <br />
        <h2 className="text-f-css">
          In 2012, Queen were ranked as being the seventh biggest-selling
          singles artist in United Kingdom with 12.6 million singles sold. In a
          time period stretching from 1991 up to October 1995, Queen sold five
          million copies in Italy alone.
          <br />
          <br />
          <Container>
            <Row>
              <Col>*Studio albums 15</Col>
              <Col>*Live albums 11</Col>
              <Col>*Compilation albums 16</Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>*Soundtrack albums 2</Col>
              <Col>*Singles 72</Col>
              <Col>* Box sets 19</Col>
            </Row>
          </Container>
          <br />
          <br />
          <p className="center">
            Here you can see all the Songs, Awards and Discography about Queen.
          </p>
        </h2>
      </div>
      <DatatablePage />
    </>
  );
}

export default Discography;
