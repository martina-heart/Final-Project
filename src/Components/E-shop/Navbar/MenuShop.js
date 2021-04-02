import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItems,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import makeStyles from "./styles";
import Logo1 from "../../../Images/logologo.jpeg";

const MenuShop = () => {
  const classes = makeStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={Logo1}
              alt="Queen Online Shop "
              height="25px"
              className={classes.image}
            />
            Queen Online Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuShop;
