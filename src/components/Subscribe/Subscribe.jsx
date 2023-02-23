import React from "react";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.title}>Read a free chapter</h1>
        <p className={classes.paragraph}>
          Making this the first true value generator on the Internet. It of over
          200 Latin words, combined with a handful.
        </p>
        <div className={classes.subscribeBox}>
          <input
            type="email"
            className={classes.inputBox}
            placeholder="Your Email id.."
          />
          <button className={classes.subscribeBtn}>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
