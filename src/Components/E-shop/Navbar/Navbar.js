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
import useStyles from "../Products/style";
import Logo1 from "../../../Images/logologo.jpeg";

const Navbar = () => {
  const classes = useStyles();
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
          <div classname={classes.button}>
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

export default Navbar;
