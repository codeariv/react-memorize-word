import React, { useContext } from "react";
import AppContext from "../AppContext";
import { Link } from "@material-ui/core";

import { zoomInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function TransitionsModal() {
  const value = useContext(AppContext);
  let { trueOrFalse } = value;

  const styles = {
    root: {
      textAlign: "center",
    },
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomInUp, "zoomInUp"),
    },
    image: {
      maxWidth: "15rem",
    },
    text: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  };

  let refreshPage = () => {
    window.location.reload();
  };

  console.log(trueOrFalse);

  return (
    <div style={styles.root}>
      {trueOrFalse ? (
        <div>
          <StyleRoot>
            <div className="test" style={styles.bounce}>
              <img src="/assets/images/dolphin.jpeg" style={styles.image} />
              <p className="text" style={styles.text}>
                You are memorious
              </p>
            </div>
          </StyleRoot>
          <Link component="button" variant="body2" onClick={refreshPage}>
            Try again
          </Link>
        </div>
      ) : (
        <div>
          <StyleRoot>
            <div className="test" style={styles.bounce}>
              <img src="/assets/images/nemo.jpg" style={styles.image} />
              <p className="text" style={styles.text}>
                Try to improve your memory
              </p>
            </div>
          </StyleRoot>
          <Link component="button" variant="body2" onClick={refreshPage}>
            Try again
          </Link>
        </div>
      )}
    </div>
  );
}
