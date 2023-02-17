import React from "react";
import classes from "./Hero.module.css";
import book from "../../assets/images/book.svg";
import line from "../../assets/images/line.svg";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroWrapper}>
        <div className={classes.heroContent}>
          <div className={classes.welcomeTextContainer}>
            <img src={line} alt="Line" className={classes.welcomeLine} />
            <span className={classes.welcomeText}>Welcome To Pages</span>
          </div>
          <h1 className={classes.title}>Books are uniquely portable magic</h1>
          <p className={classes.heroParagraph}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div className={classes.heroActions}>
            <button className={classes.orderButton}>Order Today</button>
            <a href="#demo" className={classes.freeDemoBtn}>
              Read Free Demo
            </a>
          </div>
          <div className={classes.aboutBook}>
            <div className={classes.bookSpec}>
              <div className={classes.dot}></div>
              <span className={classes.specTitle}>Pages:</span>
              <span className={classes.specValue}>586 pages</span>
            </div>
            <div className={classes.bookSpec}>
              <div className={classes.dot}></div>
              <span className={classes.specTitle}>Length:</span>
              <span className={classes.specValue}>10 Hours</span>
            </div>
            <div className={classes.bookSpec}>
              <div className={classes.dot}></div>
              <span className={classes.specTitle}>Ratings:</span>
              <span className={classes.specValue}>4.5/5(306 Ratings)</span>
            </div>
          </div>
        </div>
        <div className={classes.heroImage}>
          <img src={book} alt="Book" className={classes.heroBookImage} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
