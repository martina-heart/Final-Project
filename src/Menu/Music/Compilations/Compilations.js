import React from "react";

import Gallery from "react-photo-gallery";
import { photos, photos1, photos2 } from "./Photos";

function Compilations() {
  return (
    <div>
      <h1 className="live-css">Compilations</h1>
      <Gallery photos={photos} />
      <Gallery photos={photos1} />
      <Gallery photos={photos2} />
      <p className="text-his">
        Queen is the debut studio album by the British rock band Queen. Released
        on 13 July 1973 by EMI Records in the UK and by Elektra Records in the
        US, it was recorded at Trident Studios and De Lane Lea Music Centre,
        London, with production by Roy Thomas Baker, John Anthony and the band
        members themselves. The album was influenced by heavy metal and
        progressive rock. The lyrics are based on a variety of topics, including
        folklore ("My Fairy King") and religion ("Jesus"). Lead singer Freddie
        Mercury wrote five of the ten tracks, lead guitarist Brian May wrote
        four songs (including "Doing All Right", which he co-wrote with his
        Smile bandmate Tim Staffell), and drummer Roger Taylor both wrote and
        sang "Modern Times Rock and Roll". The final song on the album is a
        short instrumental version of "Seven Seas of Rhye," the full version of
        which would appear on the band's second album, Queen II.
      </p>
    </div>
  );
}

export default Compilations;
