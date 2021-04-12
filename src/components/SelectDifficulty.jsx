import React, { useContext } from "react";
import AppContext from "../AppContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ListItem, Typography } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectDifficulty(props) {
  const classes = useStyles();

  const value = useContext(AppContext);
  let { generateRandomWords } = value;

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h6">
        1. Choose difficulty
      </Typography>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button onClick={() => generateRandomWords("easy")}>
          <ListItemText primary="Easy" />
        </ListItem>
        <ListItem button onClick={() => generateRandomWords("medium")}>
          <ListItemText primary="Medium" />
        </ListItem>
        <ListItem button onClick={() => generateRandomWords("difficult")}>
          <ListItemText primary="Difficult" />
        </ListItem>
        <ListItem button onClick={() => generateRandomWords("veryDifficult")}>
          <ListItemText primary="Very Difficult" />
        </ListItem>
      </List>
    </div>
  );
}
