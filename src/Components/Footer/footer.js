import React from "react";

import { SocialIcon } from "react-social-icons";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import EmailShare from "react-email-share-link";

import "../Footer/footer.css";

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
              <SocialIcon
                network="facebook"
                bgColor="#3b5998"
                url="https://www.facebook.com/Queen"
              />

              <SocialIcon
                network="twitter"
                bgColor="#00ACEE"
                url="https://twitter.com/queenwillrock?lang=en"
              />

              <SocialIcon
                network="youtube"
                bgColor="#C4302B"
                url="https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ"
              />

              <SocialIcon
                network="google"
                bgColor="rgb(221, 75, 57)"
                url="https://en.wikipedia.org/wiki/Queen_(band)"
              />

              <SocialIcon
                network="instagram"
                bgColor="#DD2A7B"
                url="https://www.instagram.com/officialqueenmusic"
              />
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
                <EmailShare email="philsymes@theprcontact.com">
                  {(link) => (
                    <a href={link} data-rel="external">
                      philsymes@theprcontact.com
                    </a>
                  )}
                </EmailShare>
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
                <a href="https://en.wikipedia.org/wiki/Queen_(band)">
                  Queen.com
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
