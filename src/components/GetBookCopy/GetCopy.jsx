import React from "react";
import classes from "./GetCopy.module.css";
import photo from "../../assets/images/getCopy/photo.png";
import { motion } from "framer-motion";

const GetCopy = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          className={classes.content}
        >
          <h4 className={classes.title}>Get Book Copy Today!</h4>
          <p className={classes.paragraph}>
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </p>
          <button className={classes.orderBtn}>Order Today</button>
        </motion.div>
        <img src={photo} alt="CoffePhoto" className={classes.image} />
      </div>
    </section>
  );
};

export default GetCopy;
