import React, { useContext } from "react";
import AppContext from "../AppContext";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginTop: "1rem",
  },
}));

export default function Question(props) {
  const classes = useStyles();

  const value = useContext(AppContext);
  let { randomPosition, setTypedWord, typedWord, submitAnswer } = value;

  return (
    <div className={classes.root}>
      <p>Which word is located at position {randomPosition}</p>
      <form onSubmit={submitAnswer}>
        <TextField
          id="standard-basic"
          fullWidth
          label="Type the answer"
          onChange={(e) => setTypedWord(e.target.value)}
          value={typedWord}
        />

        <Button
          variant="contained"
          color="default"
          disableElevation
          className={classes.button}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
