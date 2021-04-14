import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "Awards",
        field: "awards",
        sort: "asc",
        width: 200,
      },
      {
        label: "Number Of Tracks",
        field: "numberOfTracks",
        sort: "asc",
        width: 200,
      },

      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        title: "Queen",
        awards: " EMI ",
        numberOfTracks: "15",
        date: "1973",
      },
      {
        title: "Queen/Wishbone Ash-Queen/Live Dates",
        awards: "Afrts",
        numberOfTracks: "27-4",
        date: "1973",
      },
      {
        title: "Sheer Heart Attack",
        awards: "EMI",
        numberOfTracks: "13",
        date: "1974",
      },
      {
        title: "Queen 2",
        awards: "EMI",
        numberOfTracks: "9",
        date: "1974",
      },
      {
        title: "Queen-Stereo Pop Special-72",
        awards: "BBC Transcription Services",
        numberOfTracks: "16",
        date: "1974",
      },
      {
        title: "A Night At The Opera",
        awards: "EMI",
        numberOfTracks: "2",
        date: "1975",
      },
      {
        title: "Stereo Pop Special-119",
        awards: "BBC Transcription Services",
        numberOfTracks: "17",
        date: "1976",
      },
      {
        title: "A Day At The Races",
        awards: "EMI",
        numberOfTracks: "20",
        date: "1976",
      },
      {
        title: "Queen/Jan Hammer-Nightbird & Company",
        awards: "Nightbird & Company",
        numberOfTracks: "42",
        date: "1976",
      },
      {
        title: "News Of The World",
        awards: "EMI",
        numberOfTracks: "1",
        date: "1977",
      },
      {
        title: "Queen/Alison Steele",
        awards: "DWJ Associates",
        numberOfTracks: "",
        date: "1977",
      },
      {
        title: "Jazz",
        awards: "EMI",
        numberOfTracks: "",
        date: "1978",
      },
      {
        title: "A Portrait Of Queen",
        awards: "BBC Transcription Services",
        numberOfTracks: "7",
        date: "1978/10/16",
      },
      {
        title: "Live Killers",
        awards: "EMI,EMI,EMI,EMI",
        numberOfTracks: "1",
        date: "1979",
      },
      {
        title: "Queen Live Killers",
        awards:
          "Afrts, American Forces Radio And Television Service, United States Department Of Defense",
        numberOfTracks: "30",
        date: "1979",
      },
      {
        title: "Flash Gordon ",
        awards: "EMI,EMI",
        numberOfTracks: "1",
        date: "1980",
      },
      {
        title: "The Game",
        awards: "EMI,EMI",
        numberOfTracks: "1",
        date: "1980",
      },
      {
        title: "Queen/ Jeff Barry",
        awards: "Afrts,Afrts",
        numberOfTracks: "4",
        date: "1980",
      },
      {
        title: "Queen Of The Record Special with Mary Turner",
        awards: "Westwood One",
        numberOfTracks: "12",
        date: "1981",
      },
      {
        title: "The Robert W.Morgan",
        awards: "Watemark",
        numberOfTracks: "1",
        date: "1982/09/26",
      },
      {
        title: "Queen-Off The Record with Mary Turner",
        awards: "Westwood One",
        numberOfTracks: "8",
        date: "1982/09/03",
      },
      {
        title: "Hot Space",
        awards: "EMI,EMI",
        numberOfTracks: "1",
        date: "1982",
      },
      {
        title: "BBC Rock-Hour-309",
        awards: "BBC Rock Hour",
        numberOfTracks: "12",
        date: "1982",
      },
      {
        title: "Bay The Moon/The Works",
        awards: " Werld Rekord",
        numberOfTracks: "1",
        date: "1984",
      },
      {
        title: "The Works",
        awards: "EMI",
        numberOfTracks: "1",
        date: "1984",
      },
      {
        title: "B.B.C Rock Hour",
        awards: "London Wavelength",
        numberOfTracks: "20",
        date: "1984/12/22",
      },
      {
        title: "Live Magic",
        awards: "EMI,EMI,EMI",
        numberOfTracks: "1",
        date: "1986",
      },
      {
        title: "A Kind Of Magic",
        awards: "EMI",
        numberOfTracks: "1",
        date: "1986",
      },
      {
        title: "Queen/Foghat/Deep Purple",
        awards: "DIR Broadcasting",
        numberOfTracks: "77",
        date: "1987",
      },
      {
        title: "The King Biscuit Flower Hour ",
        awards: "DIR Radio Network, DIR Radio Network",
        numberOfTracks: "12",
        date: "1988/08/14",
      },
      {
        title: "At The Beeb",
        awards: "Band of Joy",
        numberOfTracks: "1",
        date: "1989",
      },
      {
        title: "The Miricle",
        awards: "1",
        numberOfTracks: "Parlophone",
        date: "1989",
      },
      {
        title: "Innuendo",
        awards: "Parlophone,Parlophone",
        numberOfTracks: "3",
        date: "1990",
      },
      {
        title: "Badfinger",
        awards: "Westwood One,Westwood One",
        numberOfTracks: "1",
        date: "1991/10/26",
      },
      {
        title: "Up Close",
        awards: "Media America Radio",
        numberOfTracks: "1",
        date: "1991",
      },
      {
        title: "Live At Wembley",
        awards: "Parlophone,Parlophone",
        numberOfTracks: "17",
        date: "1992/12/09",
      },
      {
        title: "Talks",
        awards: "Hollywood Records",
        numberOfTracks: "2",
        date: "1992",
      },
      {
        title: "Classic In Concert",
        awards: "BBC Transcription",
        numberOfTracks: "15",
        date: "1993",
      },
      {
        title: "Off The Record Special",
        awards: "Westwood One",
        numberOfTracks: "26",
        date: "1993",
      },
      {
        title: "Made in Heaven",
        awards: "Parlophone,Parlophone",
        numberOfTracks: "1",
        date: "1995",
      },
      {
        title: "A Royal Progress",
        awards:
          "BBC Radio International, BBC Radio International, BBC Radio International, BBC World Service, BBC World Service, BBC World Service",
        numberOfTracks: "32",
        date: "1996/09/26",
      },
      {
        title: "The Eye",
        awards: "	Electronic Arts, EMI International New Media",
        numberOfTracks: "1",
        date: "1998",
      },
      {
        title: "BASIC Queen Bootlegs",
        awards: "Hallywood Records",
        numberOfTracks: "2",
        date: "1999",
      },
      {
        title: "Queen's Day!",
        awards: "Heineken Music",
        numberOfTracks: "12",
        date: "2002",
      },
      {
        title: "Queen And Ben Elton",
        awards: "EMI,Parlophone",
        numberOfTracks: "1",
        date: "2002/08/11",
      },
      {
        title: "Superstar Concert Series",
        awards: "Westwood One",
        numberOfTracks: "15",
        date: "2002",
      },
      {
        title: "Queen On Fire",
        awards: "Parlophone,Parlophone,Parlophone",
        numberOfTracks: "9",
        date: "2004/04/09",
      },
      {
        title: "Queen And Paul Rodgers-Return Of The Campions",
        awards: "Parlophone,Parlophone",
        numberOfTracks: "1",
        date: "2005",
      },
      {
        title: "Rock Montreal",
        awards: "Parlophone, Parlophone, EMI, EMI",
        numberOfTracks: "12",
        date: "2007/06/01",
      },
      {
        title: "Queen + Paul Rodgers - The Cosmos Rocks ",
        awards: "	Parlophone, Parlophone",
        numberOfTracks: "8",
        date: "2008/02/01",
      },
      {
        title: "Queen + Paul Rodgers - Live In Ukraine",
        awards: "Parlophone",
        numberOfTracks: "16",
        date: "2009",
      },
      {
        title: "Hungarian Rhapsody (Live In Budapest)",
        awards: "Island Records Group, Universal Music Group",
        numberOfTracks: "12",
        date: "2012",
      },
      {
        title: "Live At The Rainbow '74",
        awards: "	Virgin EMI Records",
        numberOfTracks: "4",
        date: "2014/02/27",
      },
      {
        title: "A Night At The Odeon",
        awards: "Virgin EMI Records",
        numberOfTracks: "9",
        date: "2015/07/14",
      },
      {
        title: "Queen + Adam Lambert - Live In Japan",
        awards: "Ward Records, Eagle Vision, Universal Music Group",
        numberOfTracks: "13",
        date: "2016",
      },
      {
        title: "On Air ",
        awards: "Virgin EMI Records",
        numberOfTracks: "1",
        date: "2016/06/27",
      },
      {
        title: "Queen + Adam Lambert - Live Around The World",
        awards: "EMI",
        numberOfTracks: "16",
        date: "2020/01/25",
      },
    ],
  };

  return <MDBDataTable striped bordered data={data} />;
};

export default DatatablePage;
