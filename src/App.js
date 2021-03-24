import React, { Component } from "react";

import "./App.css";
import MyMenu from "./Menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { SlideShow } from "./Components/Header/slideshow";
import Shop from "./e-shop/eShop";

function App() {
  return (
    <>
      <MyMenu />
      <Header />
      <SlideShow />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
