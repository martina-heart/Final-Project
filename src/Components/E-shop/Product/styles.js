import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "500px",
    paddingLeft: "70px",
  },
  media: {
    height: 0,
    paddingTop: "90%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
