import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../Footer/footer.css";
import { SocialIcon } from "react-social-icons";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer-left col-md-4 col-sm-6">
            <p className="about">
              <span> About Us</span> Queen’s musical has since opened in
              Australia, Spain, Las Vegas,USA, Russia, Germany and Japan and
              continues to have touring productions across the world.
            </p>
            <div className="footer-social-link">
              <NavLink to="https://www.facebook.com/Queen/">
                <SocialIcon network="facebook" bgColor="#3b5998" />
              </NavLink>

              <NavLink to="https://twitter.com/queenwillrock?lang=en">
                <SocialIcon network="twitter" bgColor="#00ACEE" />
              </NavLink>
              <NavLink to="https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ">
                <SocialIcon network="youtube" bgColor="#C4302B" />
              </NavLink>
              <NavLink to="https://en.wikipedia.org/wiki/Queen_(band)">
                <SocialIcon network="google" bgColor="rgb(221, 75, 57)" />
              </NavLink>
              <NavLink to="https://www.instagram.com/officialqueenmusic/">
                <SocialIcon network="instagram" bgColor="#DD2A7B" />
              </NavLink>
            </div>
          </div>
          <div className="footer-center col-md-4 col-sm-6">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span> 61 Bridge Street</span> London, United Kingdom
              </p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p> (+44) 6532 2319 558</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <NavLink to="#"> philsymes@theprcontact.com</NavLink>
              </p>
            </div>
          </div>
          <div className="footer-right col-md-4 col-sm-6">
            <h2> QueenOnline</h2>
            <p className="menu">
              <NavLink to="/home">Home</NavLink>|
              <NavLink to="/about-us/history">History</NavLink> |
              <NavLink to="/music/live-music">Live Music</NavLink> |
              <NavLink to="/music/concerts">Concerts</NavLink>
            </p>

            <div className="footer-copyright text-center py-3">
              <Container id="color">
                &copy;{new Date().getFullYear()} Copyright:{" "}
                <NavLink to="https://en.wikipedia.org/wiki/Queen_(band)">
                  Queen.com
                </NavLink>
              </Container>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
