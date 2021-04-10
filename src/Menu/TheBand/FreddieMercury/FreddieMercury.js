import React from "react";
import Image from "react-bootstrap/Image";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../FreddieMercury/FreddieMercury.css";

import Freddie from "../../../Images/16-9.jpg";
import Freddie1 from "../../../Images/freddie-1.jpg";
import Freddie2 from "../../../Images/freddie-2.jpg";
import Freddie3 from "../../../Images/freddie-3.jpg";

function FreddieMercury() {
  return (
    <>
      <div>
        <h1 className="name-css">Freddie Mercury</h1>
        <Image src={Freddie} fluid />
        <br />
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">
              <h3> Informations </h3>
              <MDBRow>
                <MDBCol md="10">
                  <b>Real Name:</b> Farrokh Bulsara{" "}
                </MDBCol>
                <MDBCol md="10">
                  <b> Date Of Birth: </b> Sept 5, 1946 - Nov 24, 1991
                </MDBCol>
                <MDBCol md="10">
                  <b> Birthplace: </b> Zanzibar, Tanzania
                </MDBCol>
                <MDBCol md="10">
                  <b> Instruments: </b>
                  Vocals, piano, guitar, keyboards
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="7" className="text-f-css">
              The life of Farrokh Bulsara began on the East African island of
              Zanzibar on September 5, 1946. 25 years later in London under the
              name of Freddie Mercury he was fronting the now legendary rock
              group named Queen. The son of Bomi and Jer Bulsara, Freddie spent
              the bulk of his childhood in India where he attended St. Peter’s
              boarding school. He began taking piano lessons at the age of
              seven. No one could foresee where a love of music would take him.
              The Bulsara family moved to Middlesex in 1964 and from there
              Freddie joined up with a blues band called Wreckage while studying
              graphic design courses at Ealing College of Art. While singing for
              Wreckage, a fellow student introduced Freddie to Roger Taylor and
              Brian May, founder members of a band called Smile. Smile
              metamorphosed into Queen when Freddie joined Roger and Brian as
              the lead vocalist. The final member of the band, which was to stay
              together for the next 20 years, was bassist John Deacon, who
              joined the band on 1st of March 1971.
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <br />
      <Image
        src={Freddie1}
        fluid
        height={1000}
        width={700}
        className="center"
      />
      <br />
      <p className="text-f-css">
        The rest is rock history. EMI Records and Elektra Records signed the
        band and in 1973 their debut album Queen was released and hailed as one
        of the most exciting developments ever in rock music. The immortal
        operatically styled single Bohemian Rhapsody was released in 1975 and
        proceeded to the top of the UK charts for 9 weeks. A song that was
        nearly never released due to its length and unusual style but which
        Freddie insisted would be played became the instantly recognisable hit.
        By this time Freddie’s unique talents were becoming clear, a voice with
        a remarkable range and a stage presence that gave Queen its colourful,
        unpredictable and flamboyant personality. Very soon Queen’s popularity
        extended beyond the shores of the UK as they charted and triumphed
        around Europe, Japan and the USA where in 1979 they topped the charts
        with Freddie’s song Crazy Little thing Called Love. Queen was always
        indisputably run as a democratic organisation. All four members are each
        responsible for having penned number one singles for the band. This
        massive writing strength combined with spectacular lights, the faultless
        sound, a sprinkling of theatricality and Freddie’s balletic movements
        made up Queen on stage and on film. Through Freddie’s ability to project
        himself and the band’s music and image to the four corners of 70,000
        seater venues they became known as the prime developers of stadium rock,
        a reputation perpetuated by their pioneering tactics in South America
        where in 1981 they performed to 231,000 fans in Sao Paulo, a world
        record at the time. They also became known as the key innovators of pop
        videos as their catalogue of 3-minute clips became more and more
        adventurous in style, size and content.
      </p>
      <br />
      <Image src={Freddie2} fluid className="center" />
      <br />
      <p className="text-f-css">
        Their phenomenal success continued around the globe throughout the 80’s
        highlighted in 1985 by their show-stealing and unforgettable performance
        on stage at Live Aid. In the mid 80’s, Freddie started concentrating on
        his solo career, which was to run in tandem with Queen (“the
        mothership”) for several albums commencing with the 1985 release of Mr.
        Bad Guy. Freddie’s much loved sense of self-parody reached a zenith with
        his cover version of The Platter’s song The Great Pretender in 1987, the
        video of which recorded him descending a sweeping staircase among acres
        of identical cardboard cutouts of himself. His first major collaboration
        outside of Queen was with Dave Clark for the recording of London’s West
        End musical Time, in 1986. This was followed in 1987 with the
        realisation of one of Freddie’s long-term dreams; to record with the
        world revered opera diva Montserrat Caballé. The LP’s title song,
        Barcelona went on to become an anthem for Senora Caballé’s home city and
        the theme for the Olympics in 1992. While most publicly recognised as
        the front man to one of the most progressive rock bands of the 70’s,
        Freddie defied the stereotype. A taste for venturing into new
        territories – a trait that was to have a marked influence on the
        direction Queen would take – took Freddie to explore his interests in a
        wide spectrum of the arts, particularly in the areas of ballet, opera
        and theatre, even taking a participating role: in October 1977 the
        sell-out audience of a charity gala at the London Coliseum organised by
        Royal Ballet Principal dance Wayne Eagling received the surprise of an
        unannounced appearance by a silver-sequinned leotard-clad Freddie
        performing an intricate routine choreographed for him by Eagling. In
        1987 he made a one-night appearance in Dave Clarke’s Time at the
        Dominion Theatre, although legend has it Freddie occasionally turned up
        at the theatre to support friend Clarke’s musical, one night selling
        ice-creams in the stalls! Freddie would have loved the fact that The
        Dominion played host to the band’s phenomenally successful musical We
        Will Rock You which ran for 12 years. Freddie returned to the studios to
        record Innuendo with Queen in 1990.
      </p>
      <br />
      <Image src={Freddie3} fluid className="center" />
      <br />
      <p className="text-f-css">
        On November 24th, 1991, Freddie’s struggle against AIDS ended when he
        passed away just over 24 hours after he had publicly announced he had
        the disease. Musicians and fans from all over the world paid their
        highest respects as the passing of rock’s most innovative, flamboyant
        ambassador signified the end of an era at the Freddie Mercury Tribute
        Concert at Wembley Stadium on April 20, 1992 which gave birth to the
        Mercury Phoenix Trust, the AIDS charity set up in Freddie’s memory by
        the remaining members of Queen and Freddie’s Executor, Jim Beach.
        Freddie Mercury, who majored in stardom while giving new meaning to the
        word showmanship, left a legacy of songs, which will never lose their
        stature as classics to live on forever. Some of the most poignant of
        these were immortalised on the Queen album Made In Heaven released in
        November 1995. The sleeve of the album shows a view from Freddie’s
        Montreux home. Despite twenty years having passed since Freddie lost his
        life to HIV complications, he remains in the minds of millions
        throughout the world as one of the greatest artists we will ever see.
      </p>
      <p className="text-f-css">
        In September 2010 (coincidentally, around Freddie’s 64th birthday) a
        poll carried out among rock fans saw him named the Greatest Rock Legend
        Of All Time, beating Elvis Presley to claim the title, and ahead of
        David Bowie, Jon Bon Jovi, Jimi Hendrix and Ozzy Osbourne. A spokesman
        for OnePoll.com which conducted the poll said: "Freddie Mercury had it
        all, the voice, the image, the stage presence, everything. "He combined
        his ear for music with an ability to deliver to stadium audiences and as
        such millions were devastated when HIV killed him in 1991. His legend
        will live on forever.” (OnePoll.Com. September 6, 2010) September 5,
        2010 saw The Mercury Phoenix Trust launch Freddie For A Day, a major
        annual initiative designed to celebrate Freddie’s life each year on his
        birthday and to support the on-going work of the Trust. The project
        encourages fans to dress as Freddie for a day and in doing so raise
        funds for MPT through sponsorship.
      </p>
      <p className="text-f-css">
        No one could have imagined the extraordinary response which resulted,
        with fans from 24 countries around the world, from Argentina to Ukraine,
        seizing on the idea to pay their own special tribute to Freddie. Some
        sent pictures strutting their stuff at home, singing into a microphone
        in their bedroom. Others took the plunge and spent the whole day as
        Freddie, including one US enthusiast who dressed herself as I’m Going
        Slightly Mad Freddie and then spent her day at the local mall and then
        at Columbus Zoo in Ohio with a penguin and a gorilla. Another took a TGV
        trip from France to Switzerland dressed in a harlequin leotard. The
        stories of extraordinary and fun days spent come in their hundreds, and
        as a result, Freddie For A Day is now an annual event. Freddie Mercury’s
        life continues to be celebrated each year through a Mercury Phoenix
        Trust produced Official Fan Party that is held on his birthday and held
        in his honour in Montreux, Switzerland.{" "}
        <i>www.mercuryphoenixtrust.com</i>
      </p>
    </>
  );
}

export default FreddieMercury;
