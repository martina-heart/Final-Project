import React from "react";
import { Container } from "react-bootstrap";

import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-copyright text-center py-3">
        <Container fluid id="footer">
          &copy;{new Date().getFullYear()} Copyright:{" "}
          <a href="https://en.wikipedia.org/wiki/Queen_(band)"> Queen.com </a>
        </Container>
      </div>
    </>
  );
};

export default Footer;
