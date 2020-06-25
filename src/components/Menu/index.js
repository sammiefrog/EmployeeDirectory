import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  myButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 200,
    padding: "0 30px",
    marginBottom: "20px",
    fontSize: "25px",
  },
  title: {
    margin: "10px",
  },
  subHead: {
    marginTop: "10px",
  }
});

export default function FadeMenu() {
    const classes = useStyles();

  return (
    <div>
      <Button className={classes.myButton} fullWidth="true">
        <h1 className="title">Employee Directory</h1>
      </Button>
    </div>
  );
}
