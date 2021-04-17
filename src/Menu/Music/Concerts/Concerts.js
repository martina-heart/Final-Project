import React from "react";
import { FacebookPlayer } from "reactjs-media";

import { Container, Row, Col } from "react-bootstrap";
import { MDBContainer } from "mdbreact";
import "../Concerts/Concerts.css";

function Concerts() {
  return (
    <>
      <h1 className="live-css">Concerts</h1>
      <FacebookPlayer src="https://www.facebook.com/17337462361/videos/2456921474431501" />
      <MDBContainer>
        <h2 className="text-concert">The Top 5 Greatest Queen Live Concerts</h2>
        <h3 className="text-concert1">
          1. – Live Aid, Wembley, London, July 13th, 1985, “The Works Tour”
        </h3>
        <Container>
          <Row>
            <Col md={{ span: 9 }}>
              <p className="font-css">
                Concerts inspired by the initiative were held in other
                countries, such as the Soviet Union, Canada, Japan, Yugoslavia,
                Austria, Australia and West Germany. It was one of the largest
                satellite link-ups and television broadcasts of all time; an
                estimated audience of 1.9 billion, in 150 nations, watched the
                live broadcast, nearly 40 percent of the world population.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            src="https://player.vimeo.com/video/235193710"
            className="embed-responsive-item"
            width="1200"
            height="675"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-concert1">
          2. – Rock In Rio, Rio De Janeiro, January 12th, 1985, “The Works Tour”
        </h3>
        <Container>
          <Row>
            <Col md={{ span: 9 }}>
              <p className="font-css">
                The Works Tour in 1984/1985 was one of Queen's largest tours and
                included the Brazil Rock in Rio festival—in which they appeared
                on stage at two o'clock in the morning in front of 470,000
                people during the first night and 250,000 on the second night.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="1200"
            height="675"
            src="https://www.youtube.com/embed/meOz_7y-jKk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-concert1">
          3. – Morumbi Stadium, São Paulo, Brazil, March 20th, 1981, “The Game
          Tour
        </h3>
        <Container>
          <Row>
            <Col md={{ span: 9 }}>
              <p className="font-css">
                The Game Tour was a concert tour by the British rock band Queen
                to support their successful 1980 album The Game. This tour
                featured the first performances in South America by the group.
                In Buenos Aires, Queen drew a crowd of 300,000—the largest
                single concert crowd in Argentine history as of 1982. In São
                Paulo, Brazil, the attendance was 131,000 and 120,000 on two
                consecutive nights.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/czFFXSin3-w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-concert1">
          4. -Hyde Park, London September 18th, 1976, “A Day At The Races Tour"
        </h3>
        <Container>
          <Row>
            <Col md={{ span: 9 }}>
              <p className="font-css">
                Queen live in Hyde Park 1976 was a concert by the band Queen.
                The concert took place on 18 September 1976 in Hyde Park,
                London. It was part of a brief summer tour of the UK by the
                band; they also played in Edinburgh and Cardiff on this tour.
                The Hyde Park gig was a free concert, which drew in a crowd of
                over 150,000, which was one of the largest audiences for any
                concert in London.The free concert was organised by Richard
                Branson, an entrepreneur at the time.There is more than one
                audio source of this concert as well as a video. According to
                Roger Taylor, the drummer of Queen, the complete show was
                supposed to be shown on TV in early 1977 but was never aired.
                Since then, the footage has leaked out to collectors, though in
                terrible quality. Over the years, some of the footage has been
                shown in various documentaries and there are rumors of a future
                official release. The 2011 reissue of A Day at the Races
                includes a performance of "You Take My Breath Away" from this
                date.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="1200"
            height="675"
            src="https://www.youtube.com/embed/YSt8GoNLfFA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-concert1">
          5. – Estadio José Amalfitani, Buenos Aires, Argentina,
          February18th,1981, “The Game Tour”
        </h3>
        <Container>
          <Row>
            <Col md={{ span: 9 }}>
              <p className="font-css">
                The first time Queen played Argentina and the first time ever a
                Rock band was booked into a Football stadium which Queen sold
                out. Queen’s popularity in Argentina was so big at that time
                that 9 out of 10 albums in the national charts were from Queen.
                Feeling that they had somehow to prove their worth to the
                Argentinian fans, both nights were an spectrum of energy in
                which Freddie and the band completely tuned in with the
                audience. They were welcomed like royalty into the country,
                which was reminiscent of the first time they played in Japan
                back in the mid 70’s
              </p>
            </Col>
          </Row>
        </Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="1200"
            height="675"
            src="https://www.youtube.com/embed/4mk1E7xdV4U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </MDBContainer>
    </>
  );
}

export default Concerts;
