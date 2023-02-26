import React from "react";
import ReviewBox from "./ReviewBox";
import classes from "./WhatReadersSay.module.css";
import profile1 from "../../assets/images/whatReadersSay/profile1.png";
import profile2 from "../../assets/images/whatReadersSay/profile2.png";
import profile3 from "../../assets/images/whatReadersSay/profile3.png";

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
              <span className={classes.numbers}>(4.8/5)</span>
            </div>
            <span className={classes.overalRatingText}>
              Overall Customer Ratings
            </span>
          </div>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.twoEl}>
            <ReviewBox
              name="Martin Philips"
              title=" Awesome Impact "
              image={profile1}
              animationDelay="0"
            />
            <ReviewBox
              name="James Anderson"
              title=" Mind Blowing Words "
              image={profile2}
              animationDelay="0.15"
            />
          </div>
          <div className={classes.oneEl}>
            <ReviewBox
              name="Christina Louis"
              title=" Great Books Collections "
              image={profile3}
              animationDelay="0.3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatReadersSay;
