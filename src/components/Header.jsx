import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: "100%",
    position: "fixed",
    textAlign: "center",
    paddingTop: "1rem",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <h2>Memorize word</h2>
    </div>
  );
}
