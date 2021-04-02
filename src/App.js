import React, { useState, useEffect } from "react";

import Commerce, { commerce } from "./Components/E-shop/ProductList/Commerce";

import "./App.css";
import MyMenu from "./Menu/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { SlideShow } from "./Components/Header/slideshow";

import Products from "./Components/E-shop/Products/Products";
// import MenuShop from "./Components/E-shop/NavBar/MenuShop";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <MyMenu />
      <Header />
      <SlideShow />
      {/* <MenuShop /> */}
      <Products products={products} />
      <Footer />
    </>
  );
};

export default App;
