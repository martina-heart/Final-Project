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
        width: 270,
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
        title: "Tiger Nixon",
        awards: "System Architect",
        numberOfTracks: "Edinburgh",

        date: "2011/04/25",
      },
      {
        title: "Garrett Winters",
        awards: "Accountant",
        numberOfTracks: "Tokyo",

        date: "2011/07/25",
      },
      {
        title: "Ashton Cox",
        awards: "Junior Technical Author",
        numberOfTracks: "San Francisco",

        date: "2009/01/12",
      },
      {
        title: "Cedric Kelly",
        awards: "Senior Javascript Developer",
        numberOfTracks: "Edinburgh",

        date: "2012/03/29",
      },
      {
        title: "Airi Satou",
        awards: "Accountant",
        numberOfTracks: "Tokyo",

        date: "2008/11/28",
      },
      {
        title: "Brielle Williamson",
        awards: "Integration Specialist",
        numberOfTracks: "New York",

        date: "2012/12/02",
      },
      {
        title: "Herrod Chandler",
        awards: "Sales Assistant",
        numberOfTracks: "San Francisco",

        date: "2012/08/06",
      },
      {
        title: "Rhona Davidson",
        awards: "Integration Specialist",
        numberOfTracks: "Tokyo",

        date: "2010/10/14",
      },
      {
        title: "Colleen Hurst",
        awards: "Javascript Developer",
        numberOfTracks: "San Francisco",

        date: "2009/09/15",
      },
      {
        title: "Sonya Frost",
        awards: "Software Engineer",
        numberOfTracks: "Edinburgh",

        date: "2008/12/13",
      },
      {
        title: "Jena Gaines",
        awards: "numberOfTracks Manager",
        numberOfTracks: "London",

        date: "2008/12/19",
      },
      {
        title: "Quinn Flynn",
        awards: "Support Lead",
        numberOfTracks: "Edinburgh",

        date: "2013/03/03",
      },
      {
        title: "Charde Marshall",
        awards: "Regional Director",
        numberOfTracks: "San Francisco",

        date: "2008/10/16",
      },
      {
        title: "Haley Kennedy",
        awards: "Senior Marketing Designer",
        numberOfTracks: "London",

        date: "2012/12/18",
      },
      {
        title: "Tatyana Fitzpatrick",
        awards: "Regional Director",
        numberOfTracks: "London",

        date: "2010/03/17",
      },
      {
        title: "Michael Silva",
        awards: "Marketing Designer",
        numberOfTracks: "London",

        date: "2012/11/27",
      },
      {
        title: "Paul Byrd",
        awards: "Chief Financial numberOfTracksr (CFO)",
        numberOfTracks: "New York",

        date: "2010/06/09",
      },
      {
        title: "Gloria Little",
        awards: "Systems Administrator",
        numberOfTracks: "New York",

        date: "2009/04/10",
      },
      {
        title: "Bradley Greer",
        awards: "Software Engineer",
        numberOfTracks: "London",

        date: "2012/10/13",
      },
      {
        title: "Dai Rios",
        awards: "Personnel Lead",
        numberOfTracks: "Edinburgh",

        date: "2012/09/26",
      },
      {
        title: "Jenette Caldwell",
        awards: "Development Lead",
        numberOfTracks: "New York",

        date: "2011/09/03",
      },
      {
        title: "Yuri Berry",
        awards: "Chief Marketing numberOfTracksr (CMO)",
        numberOfTracks: "New York",

        date: "2009/06/25",
      },
      {
        title: "Caesar Vance",
        awards: "Pre-Sales Support",
        numberOfTracks: "New York",

        date: "2011/12/12",
      },
      {
        title: "Doris Wilder",
        awards: "Sales Assistant",
        numberOfTracks: "Sidney",

        date: "2010/09/20",
      },
      {
        title: "Angelica Ramos",
        awards: "Chief Executive numberOfTracksr (CEO)",
        numberOfTracks: "London",

        date: "2009/10/09",
      },
      {
        title: "Gavin Joyce",
        awards: "Developer",
        numberOfTracks: "Edinburgh",

        date: "2010/12/22",
      },
      {
        title: "Jennifer Chang",
        awards: "Regional Director",
        numberOfTracks: "Singapore",

        date: "2010/11/14",
      },
      {
        title: "Brenden Wagner",
        awards: "Software Engineer",
        numberOfTracks: "San Francisco",

        date: "2011/06/07",
      },
      {
        title: "Fiona Green",
        awards: "Chief Operating numberOfTracksr (COO)",
        numberOfTracks: "San Francisco",

        date: "2010/03/11",
      },
      {
        title: "Shou Itou",
        awards: "Regional Marketing",
        numberOfTracks: "Tokyo",

        date: "2011/08/14",
      },
      {
        title: "Michelle House",
        awards: "Integration Specialist",
        numberOfTracks: "Sidney",

        date: "2011/06/02",
      },
      {
        title: "Suki Burks",
        awards: "Developer",
        numberOfTracks: "London",

        date: "2009/10/22",
      },
      {
        title: "Prescott Bartlett",
        awards: "Technical Author",
        numberOfTracks: "London",

        date: "2011/05/07",
      },
      {
        title: "Gavin Cortez",
        awards: "Team Leader",
        numberOfTracks: "San Francisco",

        date: "2008/10/26",
      },
      {
        title: "Martena Mccray",
        awards: "Post-Sales support",
        numberOfTracks: "Edinburgh",

        date: "2011/03/09",
      },
      {
        title: "Unity Butler",
        awards: "Marketing Designer",
        numberOfTracks: "San Francisco",

        date: "2009/12/09",
      },
      {
        title: "Howard Hatfield",
        awards: "numberOfTracks Manager",
        numberOfTracks: "San Francisco",

        date: "2008/12/16",
      },
      {
        title: "Hope Fuentes",
        awards: "Secretary",
        numberOfTracks: "San Francisco",

        date: "2010/02/12",
      },
      {
        title: "Vivian Harrell",
        awards: "Financial Controller",
        numberOfTracks: "San Francisco",

        date: "2009/02/14",
      },
      {
        title: "Timothy Mooney",
        awards: "numberOfTracks Manager",
        numberOfTracks: "London",

        date: "2008/12/11",
      },
      {
        title: "Jackson Bradshaw",
        awards: "Director",
        numberOfTracks: "New York",

        date: "2008/09/26",
      },
      {
        title: "Olivia Liang",
        awards: "Support Engineer",
        numberOfTracks: "Singapore",

        date: "2011/02/03",
      },
      {
        title: "Bruno Nash",
        awards: "Software Engineer",
        numberOfTracks: "London",

        date: "2011/05/03",
      },
      {
        title: "Sakura Yamamoto",
        awards: "Support Engineer",
        numberOfTracks: "Tokyo",

        date: "2009/08/19",
      },
      {
        title: "Thor Walton",
        awards: "Developer",
        numberOfTracks: "New York",

        date: "2013/08/11",
      },
      {
        title: "Finn Camacho",
        awards: "Support Engineer",
        numberOfTracks: "San Francisco",

        date: "2009/07/07",
      },
      {
        title: "Serge Baldwin",
        awards: "Data Coordinator",
        numberOfTracks: "Singapore",

        date: "2012/04/09",
      },
      {
        title: "Zenaida Frank",
        awards: "Software Engineer",
        numberOfTracks: "New York",

        date: "2010/01/04",
      },
      {
        title: "Zorita Serrano",
        awards: "Software Engineer",
        numberOfTracks: "San Francisco",

        date: "2012/06/01",
      },
      {
        title: "Jennifer Acosta",
        awards: "Junior Javascript Developer",
        numberOfTracks: "Edinburgh",

        date: "2013/02/01",
      },
      {
        title: "Cara Stevens",
        awards: "Sales Assistant",
        numberOfTracks: "New York",

        date: "2011/12/06",
      },
      {
        title: "Hermione Butler",
        awards: "Regional Director",
        numberOfTracks: "London",

        date: "2011/03/21",
      },
      {
        title: "Lael Greer",
        awards: "Systems Administrator",
        numberOfTracks: "London",

        date: "2009/02/27",
      },
      {
        title: "Jonas Alexander",
        awards: "Developer",
        numberOfTracks: "San Francisco",

        date: "2010/07/14",
      },
      {
        title: "Shad Decker",
        awards: "Regional Director",
        numberOfTracks: "Edinburgh",

        date: "2008/11/13",
      },
      {
        title: "Michael Bruce",
        awards: "Javascript Developer",
        numberOfTracks: "Singapore",

        date: "2011/06/27",
      },
      {
        title: "Donna Snider",
        awards: "Customer Support",
        numberOfTracks: "New York",

        date: "2011/01/25",
      },
    ],
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default DatatablePage;
