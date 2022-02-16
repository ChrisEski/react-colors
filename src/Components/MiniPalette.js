import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "white",
      " & span": {
        backgroundColor: "yellow",
      },
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);

  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <span>Span Main</span>
      <section className={classes.secondary}>
        <h1>
          Secondary Title <span>Span Secondary</span>
        </h1>
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
