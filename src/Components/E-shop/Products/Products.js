import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";
import classes from "./style";

// const products = [
//   {
//     id: 1,
//     name: "T-shirts",
//     description: "Freddy",
//     price: "$5",
//     image:
//       "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image500/.fZW8wyfX/SharedImage-115919.jpg?t=871c7e546274296c50ce",
//   },
//   {
//     id: 2,
//     name: "other",
//     description: "something",
//     price: "$10",
//     image:
//       "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/image500/.fhpM2tKX/SharedImage-104727.jpg?t=90381ab27f466ddb0c93",
//   },
// ];

const Products = ({ products }) => {
  return (
    <>
      <br />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3} lg={4}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Products;
