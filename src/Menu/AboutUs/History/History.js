import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";

import "../History/History.css";
import Image from "react-bootstrap/Image";

import QueenGroup from "../../../Images/queen-group.jpg";
import QueenGroup1 from "../../../Images/queeen.png";
import QueenGroup2 from "../../../Images/queen-3.jpg";
import Adam from "../../../Images/Adam-.jpg";

function History() {
  return (
    <>
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
              again as the best single of all time. The success of A Night At
              The Opera was equally stunning, giving the band their first
              platinum album.
            </p>
            <MDBCol md="4">
              <Image src={QueenGroup} fluid />
            </MDBCol>
            <MDBCol md="4">
              <p className="text-his">
                In 1976 they toured the US and Japan and by spring all four
                albums resided in the UK Top Twenty. Later that year they
                released A Day At The Races, and gave a free concert in Hyde
                Park to an estimated crowd of 200,000 fans. The album was a huge
                success, advance orders alone amounting to over 500,000. The
                following year saw two major US tours, the band’s sixth album,
                News Of The World and the legendary double A side single, We
                Will Rock You and We Are The Champions.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <Image src={QueenGroup1} fluid />
            </MDBCol>
          </MDBRow>
          <p className="text-his">
            1978’s Jazz, included another huge hit single in Bicycle Race and
            Queen toured the US and Canada. They spent much of 1979 touring in
            Europe and Japan, as well as releasing their first live album, Live
            Killers. They were also approached to write the score for a
            forthcoming feature film, Flash Gordon. Before that they released
            The Game in 1980 which went five times platinum in Canada alone!
            Another One Bites The Dust became the band’s biggest selling
            American single. Later that year the soundtrack for Flash Gordon was
            released and by the end of the year Queen had sold over 45,000,000
            albums worldwide. In 1981 they toured the Far East and were the
            first band to make a stadium tour of South America. They played to
            131,000 people in Sao Paolo, the largest paying audience for any
            band anywhere in the world. Greatest Hits, Greatest Flix and
            Greatest Pix were released simultaneously later in the year and
            Greatest Hits has rarely been out of the UK album charts since.
            Greatest Flix was the first collection of promo-videos released
            commercially by any band. Next year saw the release of the band’s
            twelfth album, Hot Space whilst they were in the middle of a
            European tour.
          </p>
          <MDBRow>
            <MDBCol md="2">
              <p className="text-his">
                1984 saw The Works and the single Radio Ga Ga became a worldwide
                hit, reaching No. 1 in 19 countries. Another huge hit was I Want
                To Break Free, featuring one of their most famous videos, all
                dressed in drag. In 1985 they were the headlining act at Rock in
                Rio, the biggest festival to be held anywhere in the world. They
                again made history that year with the show-stealing performance
                at Live Aid from Wembley Stadium, which proved to be a turning
                point for the band, One Vision being the first post Live Aid
                release.
              </p>
            </MDBCol>
            <MDBCol md="8">
              <Image src={QueenGroup2} fluid />
            </MDBCol>
            <MDBCol md="2">
              <p className="text-his">
                1986 saw their 14th album, A Kind Of Magic, which was the
                soundtrack to the Russel Mulcahy film, Highlander. The title
                track became another worldwide smash and the album entered the
                UK charts at No. 1; later in the year the 2nd live album, Live
                Magic, went into the charts at No. 3. Between 1988 and 1991
                Queen released three more albums, The Miracle in 1989 and in
                1991 Innuendo and Greatest Hits II. All three entered the UK
                charts at No. 1, as did the single Innuendo.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <p className="text-his">
          On 23rd November 1991 Freddie Mercury announced to the world that he
          had AIDS and the next day he died peacefully at his home, surrounded
          by family and friends. He remains the most high profile loss from the
          disease in the entertainment world and the news shocked fans
          throughout the world. As a tribute Bohemian Rhapsody / These Are The
          Days Of Our Lives was released as a double A-sided single to raise
          funds for the Terence Higgins Trust. It entered the UK chart at No. 1,
          where it stayed for five weeks, raising over £1,000,000 for the
          charity and Queen became the first band to have the same single top
          the UK charts twice. In December of that year Queen had 10 albums in
          the UK Top 100. In 1992 Freddie was awarded posthumously the BRIT’s
          “Outstanding Contribution to British Music” and Days Of Our Lives won
          Best Single. On 20th April many of the world’s top stars joined Brian,
          Roger and John on stage at Wembley for an emotional tribute to
          Freddie.
        </p>
        <p className="text-his">
          In 1995 the tracks that Queen had begun in 1991 were completed by
          Brian, Roger and John and the long-awaited Made In Heaven was released
          worldwide. It was the end of an era. Since then the phenomenon of
          Queen has remained, however, with continuing sales for their recorded
          output on CD and video. A ballet of their music by famous French
          choreographer Maurice Bejart was premiered at the National Theatre in
          Paris in 1997 and in May 2002 the hit musical We Will Rock You opened
          to sell-out audiences in London’s West End and continues to play to
          packed houses and standing ovations every night. Queen’s first DVD
          Greatest Video Hits Vol.1 was released at the end of October 2002, and
          yet another piece of Queen product entered the UK charts at number 1.
          October 2002 also saw Queen receive their own star on the Hollywood
          Walk of Fame, Los Angeles, joining The Beatles as only one of a
          handful of non-US bands to receive the much coveted honour. Last year,
          2004 they were inducted into the Rock and Roll Walk of Fame, and in
          the UK were voted by the public into the first UK Music Hall of Fame.
        </p>
      </div>
      <Image src={Adam} fluid style={{ paddingLeft: "40px" }} />
      <p className="text-his">
        Queen’s musical has since opened in Australia, Spain, Las Vegas,USA,
        Russia, Germany and Japan and continues to have touring productions
        across the world. Brian and Roger continue to be ambassadors for the
        Mercury Phoenix Trust, the HIV/AIDS charity set up following the death
        of Freddie in 1991. To date the charity has helped over 800 projects
        worldwide and raised over $16 million in the fight against the disease.
        Brian and Roger took Queen back onto the touring circuit for the first
        time since 1986 in 2005 and 2008, joined by former Free/Bad Company
        singer, songwriter and musician Paul Rodgers playing concerts across the
        UK and throughout Europe. Since 2012 Queen have enjoyed a fruitful
        collaboration with US singer/songwriter Adam Lambert and have toured
        extensively across North and South America, Europe, the UK, Asia and
        Australia and New Zealand.
      </p>
    </>
  );
}

export default History;
