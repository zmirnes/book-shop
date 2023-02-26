import React from "react";
import classes from "./ChapterBox.module.css";
import { motion } from "framer-motion";

const ChapterBox = (props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: props.animationDelay }}
      className={classes.chapterBox}
    >
      <h3 className={classes.chapterTitle}>
        {props.number} {props.title}
      </h3>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.chapterSpecs}>
        <div className={classes.spec}>
          <div className={classes.dot}></div>
          <span className={classes.specTitle}>Pages:</span>
          <span className={classes.specValue}>{props.pages}</span>
        </div>
        <div className={classes.spec}>
          <div className={classes.dot}></div>
          <span className={classes.specTitle}>Length:</span>
          <span className={classes.specValue}>{props.length}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChapterBox;
