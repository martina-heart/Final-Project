import React from "react";

import "../LiveMusic/LiveMusic.css";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      width="1000"
      height="720"
      src="https://www.youtube.com/embed/fJ9rUzIMcZQ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
