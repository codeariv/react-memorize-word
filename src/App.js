import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import WordList from "./components/WordList";
import SelectDifficulty from "./components/SelectDifficulty";
import Question from "./components/Question";
import Result from "./components/Result";

var randomWords = require("random-words");
var rn = require("random-number");

function App() {
  const [randomWordsToShow, setRandomWordsToShow] = useState([]);
  const [typedWord, setTypedWord] = useState("");
  const [startedGame, setStartedGame] = useState(false);
  const [randomPosition, setRandomPosition] = useState(1);
  const [answered, setAnswered] = useState("");
  const [trueOrFalse, setTrueOrFalse] = useState(false);

  let generateRandomWords = (selectedDifficulty) => {
    let numberOfWords =
      selectedDifficulty === "easy"
        ? 1
        : selectedDifficulty === "medium"
        ? 3
        : selectedDifficulty === "difficult"
        ? 5
        : selectedDifficulty === "veryDifficult"
        ? 10
        : null;
    let generatedRandomWords = randomWords(numberOfWords);
    console.log(generatedRandomWords);
    setRandomWordsToShow(generatedRandomWords);
    generateRandomPosition(generatedRandomWords);
  };

  let generateRandomPosition = (generatedRandomWords) => {
    let maxPosition = generatedRandomWords.length;
    let randomWordPosition = rn({
      min: 1,
      max: maxPosition,
      integer: true,
    });
    setRandomPosition(randomWordPosition);
  };

  let submitAnswer = (e) => {
    e.preventDefault();
    console.log(typedWord, randomWordsToShow, randomPosition);
    if (typedWord == randomWordsToShow[randomPosition - 1]) {
      setTrueOrFalse(true);
    } else {
      setTrueOrFalse(false);
    }
    setAnswered(true);
  };

  return (
    <div className="App">
      <Header />
      <AppContext.Provider
        value={{
          randomWordsToShow,
          typedWord,
          startedGame,
          typedWord,
          randomPosition,
          trueOrFalse,

          setStartedGame,
          generateRandomWords,
          setTypedWord,
          submitAnswer,
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          {randomWordsToShow.length !== 0 ? (
            startedGame ? (
              answered ? (
                <Result />
              ) : (
                <Question />
              )
            ) : (
              <WordList />
            )
          ) : (
            <SelectDifficulty />
          )}
        </Grid>
      </AppContext.Provider>
    </div>
  );
}

export default App;
