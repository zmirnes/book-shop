import React from "react";
import classes from "./WhatReadersSay.module.css";

const WhatReadersSay = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <h1 className={classes.title}>What Readers Say About the Book</h1>
          <p className={classes.text}>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators.
          </p>
          <div className={classes.rating}>
            <div className={classes.circles}>
              <div className={classes.circle}></div>
              <div className={classes.circle}></div>
              <div className={classes.circle}></div>
              <div className={classes.circle}></div>
              <div className={classes.circle}></div>
            </div>
            <span className={classes.numbers}>(4.8/5)</span>
            <span className={classes.overalRatingText}>
              Overall Customer Ratings
            </span>
          </div>
        </div>
        <div className={classes.rightSide}></div>
      </div>
    </section>
  );
};

export default WhatReadersSay;
