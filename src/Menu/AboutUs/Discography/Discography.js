import React from "react";

import Image from "react-bootstrap/Image";

import Album from "../../../Images/CSP.png";
import DatatablePage from "./Discography.component";

function Discography() {
  return (
    <>
      <div>
        <h1 className="his"> Discography</h1>
        <Image src={Album} fluid className="center" />
      </div>
      <DatatablePage />
    </>
  );
}

export default Discography;
