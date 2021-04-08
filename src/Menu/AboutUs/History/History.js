import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";

import "../History/History.css";
import Image from "react-bootstrap/Image";

import QueenGroup from "../../../Images/queen-group.jpg";

function History() {
  return (
    <div>
      <h1 className="his"> History</h1>
      <MDBContainer fluid>
        <MDBRow>
          <p className="text-his">
            1975 saw their new release, A Night At The Opera, and –
            significantly – the single Bohemian Rhapsody. At 5’ 55” it should
            have been too long for successful radio play but it became one of
            the greatest singles of all time, staying at No. 1 in the UK chart
            for nine weeks. The video, directed by Bruce Gowers, is credited
            with being the first genuine promotional video. The song has
            regularly featured in all major pop polls and was recently named
            again as the best single of all time. The success of A Night At The
            Opera was equally stunning, giving the band their first platinum
            album.
          </p>

          <Image src={QueenGroup} fluid />
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default History;
