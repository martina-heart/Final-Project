import React from "react";
import { Carousel } from "react-bootstrap";

import Queen1 from "../../Images/4_Queen-hd.jpg";
import Queen2 from "../../Images/queen-hd-3.jpg";
import Queen3 from "../../Images/queen.jpg";
import Queen4 from "../../Images/Bohemian-Rhapsody-banner.jpg";

import "./slideshow.css";

export const SlideShow = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={Queen1} alt="First slide" />
          <Carousel.Caption>
            <h2>In 1981, Queen—at their near peak</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={Queen2} alt="Secound slide" />
          <Carousel.Caption>
            <h2>Queen - Rolling Show</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={Queen3} alt="Thirt slide" />
          <Carousel.Caption>
            <h2>A Kind Of Magic: The Unstoppable Power Of Queen In The 80s</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={Queen4} alt="Fourt slide" />
        </Carousel.Item>
      </Carousel>
      <h2 className="text">
        Queen are a British rock band formed in London in 1970.
      </h2>
      <h2 className="text1">
        Their classic line-up was Freddie Mercury (lead vocals, piano), Brian
        May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon
        (bass). Their earliest works were influenced by progressive rock, hard
        rock and heavy metal, but the band gradually ventured into more
        conventional and radio-friendly works by incorporating further styles,
        such as arena rock and pop rock.
      </h2>
    </>
  );
};
