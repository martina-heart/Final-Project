import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Fan1 from "../../Images/fan1.jpg";

import "../Footer/footer.css";

class Footer extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Fan1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>  */}
        <div className="footer-copyright text-center py-3">
          <Container fluid id="footer">
            &copy;{new Date().getFullYear()} Copyright:{" "}
            <a href="https://en.wikipedia.org/wiki/Queen_(band)"> Queen.com </a>
          </Container>
        </div>
      </>
    );
  }
}

export default Footer;
