import React, { useState, useEffect } from "react";
import { SlideShow } from "../Components/Header/slideshow";

import { commerce } from "../Components/E-shop/ProductList/Commerce";
import Products from "../Components/E-shop/Products/Products";

function Home() {
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
    <div>
      <SlideShow />
      <Products products={products} />
    </div>
  );
}

export default Home;
