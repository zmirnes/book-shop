import React from "react";
import classes from "./Book.module.css";
import { motion } from "framer-motion";
const Book = (props) => {
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      viewport={{ once: true }}
      className={classes.book}
      key={props.id}
    >
      <div className={classes.imageContainer}>
        <img src={props.image} alt="Book" className={classes.image} />
      </div>
      <div className={classes.aboutBook}>
        <h3 className={classes.bookTitle}>{props.title}</h3>
        <span className={classes.description}>{props.description}</span>
        <div className={classes.bookSpecs}>
          <div className={classes.bookSpec}>
            <div className={classes.dot}></div>
            <span className={classes.specTitle}>Pages:</span>
            <span className={classes.specValue}>{props.pages}</span>
          </div>
          <div className={classes.bookSpec}>
            <div className={classes.dot}></div>
            <span className={classes.specTitle}>Length:</span>
            <span className={classes.specValue}>{props.length}</span>
          </div>
        </div>
        <button className={classes.orderBtn}>Order Today</button>
      </div>
    </motion.div>
  );
};

export default Book;
