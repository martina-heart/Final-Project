import { MDBContainer } from "mdbreact";
import React from "react";

import "../LiveMusic/LiveMusic.css";

const YoutubeEmbed = () => (
  <MDBContainer>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        width="800"
        height="300"
        src="https://www.youtube.com/embed/fJ9rUzIMcZQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </MDBContainer>
);

export default YoutubeEmbed;
