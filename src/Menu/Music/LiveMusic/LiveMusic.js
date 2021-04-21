import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "../LiveMusic/LiveMusic.css";

import SpotifyPlayer from "react-spotify-player";

import YoutubeEmbed from "./LiveMusic.component";

import One from "../../../Images/one.jpg";
import Two from "../../../Images/two.jpg";
import Three from "../../../Images/three.jpg";

function LiveMusic() {
  const size = {
    width: "100%",
    height: 900,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <>
      <h1 className="live-css">Live Music</h1>
      <YoutubeEmbed />
      <br />
      <br />

      <Container>
        <Row>
          <Col md={4}>
            <SpotifyPlayer
              uri="https://open.spotify.com/playlist/0laQTbj0EUNVUw0eUiXKP8"
              size={size}
              view={view}
              theme={theme}
            />
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            {
              <p className="text-live">
                "Bohemian Rhapsody" -song . It was written by Freddie Mercury
                for the band's 1975 album A Night at the Opera. The song is a
                six-minute suite, notable for its lack of a refraining chorus
                and consisting of several sections: an intro, a ballad segment,
                an operatic passage, a hard rock part and a reflective coda.
                "Bohemian Rhapsody" is one of the few songs to emerge from the
                1970s progressive rock movement to achieve widespread commercial
                success and appeal to a mainstream audience "Bohemian Rhapsody"
                topped the UK Singles Chart for nine weeks and had sold more
                than a million copies by the end of January 1976.In 1991, after
                Mercury's death, it topped the charts for another five
                weeks,eventually becoming the UK's third best-selling single of
                all time.It is also the only song to reach the UK Christmas
                number one twice by the same artist. It also topped the charts
                in countries including Canada, Australia, New Zealand, Ireland,
                and the Netherlands, becoming one of the best-selling singles of
                all time with over six million copies sold worldwide. In the
                United States, the song peaked at number nine in 1976, but
                reached a new peak of number two on the Billboard Hot 100 after
                being used in the film Wayne's World (1992). In 2018, the
                release of Queen biopic Bohemian Rhapsody brought the song
                renewed popularity and chart success worldwide.
              </p>
            }
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col md={{ span: 14 }}>
            <p className="text-brian">
              “Recording our first album, we were all just students finishing
              our degrees.” Brian May
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <Image src={One} fluid className="center" />
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Image src={Two} fluid />
          </Col>
          <Col md="4">
            <p className="text-live">
              Queen's debut album was recorded in London between 1971 and 1972
              at Trident Studios and De Lane Lea studios. All but one of the
              tracks were produced by Queen, Roy Baker and Trident's resident
              producer John Anthony, with The Night Comes Down instead produced
              by the band and Louie Austin at De Lane Studios. The engineers for
              the sessions were Roy Baker, Mike Stone, Ted Sharpe and David
              Hentschel. The cover artwork was devised by Brian, Freddie and
              photographer friend Douglas Puddifoot and is based upon a shot
              taken on stage by Puddifoot during an early Queen concert. The
              band members thought the image of Freddie performing beneath a
              lone spot-light was an appropriate cover for the first album.
            </p>
          </Col>
          <Col xs lg="4">
            <Image src={Three} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LiveMusic;
