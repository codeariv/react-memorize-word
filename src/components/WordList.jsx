import React, { useContext } from "react";
import AppContext from "../AppContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function WordList(props) {
  const classes = useStyles();

  const value = useContext(AppContext);
  let { randomWordsToShow, setStartedGame } = value;

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h6">
        2. Memorize the words and their position
      </Typography>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        {randomWordsToShow.map((word, index) => {
          return (
            <ListItem>
              <ListItemText primary={index + 1 + ". " + word} />
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="contained"
        color="default"
        disableElevation
        onClick={() => setStartedGame(true)}
      >
        Start the game
      </Button>
    </div>
  );
}
