import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

//menu
import MyMenu from "./Menu/Menu";
import Home from "./Menu/Home";

//The Band
import FreddieMercury from "./Menu/TheBand/FreddieMercury/FreddieMercury";
import BrianMay from "./Menu/TheBand/BrianMay/BrianMay";
import RogerTaylor from "./Menu/TheBand/RogerTaylor/RogerTaylor";
import JohnDeacon from "./Menu/TheBand/JohnDeacon/JohnDeacon";
//About Us
import History from "./Menu/AboutUs/History/History";
import Discography from "./Menu/AboutUs/Discography/Discography";
//Music
import LiveMusic from "./Menu/Music/LiveMusic/LiveMusic";
import Compilations from "./Menu/Music/Compilations/Compilations";
import Concerts from "./Menu/Music/Concerts/Concerts";

const App = () => {
  return (
    <div>
      <MyMenu />
      <Header />
      <>
        <Switch>
          <Route path="/music/live-music" component={LiveMusic} />
          <Route path="/music/compilations" component={Compilations} />
          <Route path="/music/concerts" component={Concerts} />

          <Route path="/the-band/freddie-mercury" component={FreddieMercury} />
          <Route path="/the-band/brian-may" component={BrianMay} />
          <Route path="/the-band/roger-taylor" component={RogerTaylor} />
          <Route path="/the-band/john-deacon" component={JohnDeacon} />

          <Route path="/about-us/history" component={History} />
          <Route path="/about-us/discography" component={Discography} />

          <Route path="/" component={Home} />
        </Switch>
      </>

      <Footer />
    </div>
  );
};

export default App;
