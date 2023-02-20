import React from "react";
import classes from "./SectionBox.module.css";

const SectionBox = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.numberBox}>
        <span className={classes.number}>{props.number}</span>
      </div>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
};

export default SectionBox;
