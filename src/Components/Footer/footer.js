import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";

import "../Footer/footer.css";

class Footer extends Component {
  state = {};

  render() {
    return (
      <>
        <footer class="footer">
          <div class="footer-left col-md-4 col-sm-6">
            <p class="about">
              <span> About Us</span> Queen’s musical has since opened in
              Australia, Spain, Las Vegas,USA, Russia, Germany and Japan and
              continues to have touring productions across the world.
            </p>
            <div className="footer-social-link">
              <a href="https://www.facebook.com/Queen/">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/queenwillrock?lang=en">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ">
                <i class="fa fa-youtube"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Queen_(band)">
                <i class="fa fa-google-plus"></i>
              </a>
              <a href="https://www.instagram.com/officialqueenmusic/">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            ///////
            <div class="footer-social-link">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-center col-md-4 col-sm-6">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span> 61 Bridge Street</span> London, United Kingdom
              </p>
            </div>
            <div>
              <i class="fa fa-phone"></i>
              <p> (+44) 6532 2319 558</p>
            </div>
            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="#"> philsymes@theprcontact.com</a>
              </p>
            </div>
          </div>
          <div class="footer-right col-md-4 col-sm-6">
            <h2>
              {" "}
              QueenOnline<span> logo</span>
            </h2>
            <p class="menu">
              <a href="#"> Home</a> |<a href="#"> About</a> |
              <a href="#"> News</a> |<a href="#"> Contact</a>
            </p>

            <div className="footer-copyright text-center py-3">
              <Container id="color">
                &copy;{new Date().getFullYear()} Copyright:{" "}
                <a href="https://en.wikipedia.org/wiki/Queen_(band)">
                  {" "}
                  Queen.com{" "}
                </a>
              </Container>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
