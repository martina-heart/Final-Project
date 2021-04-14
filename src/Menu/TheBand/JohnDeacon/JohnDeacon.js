import React from "react";
import Image from "react-bootstrap/Image";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import John from "../../../Images/john.jpg";
import John1 from "../../../Images/john-1.jpg";
import John2 from "../../../Images/john-2.jpg";
import John3 from "../../../Images/john-3.jpg";

function JohnDeacon() {
  return (
    <>
      <div>
        <h1 className="name-css">John Deacon</h1>
        <Image src={John} fluid />
        <br />
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">
              <h3> Informations </h3>
              <MDBRow>
                <MDBCol md="10">
                  <b> Date Of Birth: </b> August 19, 1951
                </MDBCol>
                <MDBCol md="10">
                  <b> Birthplace: </b> Leicester, England
                </MDBCol>
                <MDBCol md="10">
                  <b> Instruments: </b>
                  Bass guitar, double bass, keyboards
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="7" className="text-f-css">
              John Deacon’s first guitar was a red plastic Tommy Steele special,
              which his parents bought for him when he was seven. John’s father,
              Arthur, however, led him in a different direction, encouraging
              John to tinker with electronics, a hobby that Arthur himself
              loved. One of John's early projects included adapting an old
              reel-to-reel tape deck to record music from the radio - usually
              The Beatles and Alan Freeman's Hit Parade. John’s interest in
              electronics developed into a passion, and in his younger years at
              least, he thought of turning his hobby into a career.
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
        <Image src={John1} fluid height={1000} width={700} className="center" />
        <p className="text-f-css">
          But side by side with his interest in electronics, John's interest in
          music was also growing, particularly triggered when he bought The
          Beatles first two albums. Becoming a huge fan of the band, John took
          the decision to learn how to play the guitar. Diligently saving the
          money from his early morning paper round, John was able to buy a
          ‘proper’ guitar. He then threw himself into practising, and was soon
          jamming in a friend's garage. By the age of fourteen John was well
          practised enough to form his first band, The Opposition. Over the next
          few years, The Opposition went through numerous line-up changes and
          played many gigs. By the end of 1966, the band had a strong following
          throughout John’s home turf of Leicester. But when, later that year,
          the Opposition's bassist left the band, it fell to John to fill the
          gap. So, he bought his first bass guitar, an Eko, for £22, and with
          the change of line-up, the band changed their name to The New
          Opposition, with John now playing the bass. Several band name changes
          later "they were now called Art", 1969 saw John leaving the band for
          London, taking up studies in electronics at Chelsea College,
          University of London. For the moment, music took second place to
          electronics, but John had of course brought along his old acoustic
          guitar just in case an opportunity came up. John went on to achieve a
          First Class Honours Degree in Electronics that same year. In October
          of 1970, John went to see a performance by a new band called Queen. He
          recalls, "They were all dressed in black, and the lights were very dim
          too, so all I could see were four shadowy figures. They didn't make a
          lasting impression on me at the time.”
        </p>
        <Image src={John2} fluid height={1000} width={700} className="center" />
        <p className="text-f-css">
          But several months later, in early 1971, John again encountered Queen,
          when he was introduced to Brian May and Roger Taylor. For their part,
          they had not been impressed by the bass players they’d encountered and
          had just lost their seventh. They asked John if he was interested in
          auditioning and days later John found himself at a lecture hall at
          Imperial College where the band was rehearsing. He brought along his
          trusty bass guitar and his own custom- adapted amp, now known as the
          legendary ‘Deacy Amp’. He began to learn Son And Daughter and a few
          other songs the group had been playing. Not long after, on 1 March
          1971, John Richard Deacon became the fourth and final member of Queen,
          largely, as history recounts it, not only because he was a brilliant
          bass player, but he was also quiet and didn’t try to upstage the
          others, particularly the band’s lead singer, the very larger than life
          Freddie Mercury. At just 19, John was the youngest member to join the
          band.
        </p>
        <p className="text-f-css">
          That home-made amp, the ‘Deacy’, which helped John take his place in
          Queen and is also now used by Brian May, is shortly to become
          commercially available. John’s image as ‘the quiet one’ in Queen
          extended to their early recording sessions, in London, which focused
          on songs written by Freddie, Brian and Roger. John’s standing as the
          ‘invisible man’ of the group was humorously marked by the band on
          their first album, Queen, where they changed his name in the sleeve
          credits to Deacon John, rather than the other way around, to “make him
          sound more interesting”. This returned to normal for Queen II.
        </p>
        <Image src={John3} fluid height={1000} width={700} className="center" />
      </div>
      <p className="text-f-css">
        It wasn’t until the band’s third album, Sheer Heart Attack, that John’s
        first composition for Queen appeared, with the rather catchy Misfire.
        More of a Pop/Motown kind of guy - strangely at odds with Brian and
        Roger’s rock roots and Freddie’s grand musical landscapes - John’s
        writing skills flourished in the recording sessions which followed. He
        would go on to compose some of Queen’s biggest and most popular hits
        including You’re My Best Friend, I Want To Break Free’ and Another One
        Bites the Dust, propelling Queen’s career to new heights in the US,
        topping the charts for three weeks and being voted the Favourite Single
        in the Pop/Rock category at the American Music Awards in 1981. The
        Another One Bites the Dust single was such a hit right across the board
        that it even found an audience on the black audience radio stations,
        reaching No. 2 in the national R & B charts. Along with We Are The
        Champions and We Will Rock You, the song has passed into legend by
        becoming Queen’s third major sports anthem. John took a brief foray into
        solo work when in 1986 he formed The Immortals, and released one single,
        No Turning Back, and contributing to the original soundtrack of the film
        Biggles, based on the Royal Flying Corps pilot character in the series
        of novels written by Captain W.E. Johns.
      </p>
      <p className="text-f-css">
        Today John lives a life retired from Queen but still takes an interest
        in the continuance of the legacy of the band, and remains in contact
        with former bandmates, Roger Taylor and Brian May. John’s last
        appearance on stage with Queen was at the Paris National Théâtre de
        Chailioton 17 January 1997 at the Gala premiere of Maurice Béjart’s
        AIDS-inspired Ballet for Life, dedicated to Freddie Mercury and dancer,
        Jorge Donn, performing The Show Must Go On with Elton John joining the
        band on vocals. John joined his former bandmates for one final time in
        October 1997 for the recording of the Brian May song, No-One But You
        (Only The Good Die Young), released by Queen as a personal tribute to
        the late Freddie Mercury.
      </p>
    </>
  );
}

export default JohnDeacon;
