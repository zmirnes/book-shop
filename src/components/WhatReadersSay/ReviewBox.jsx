import React from "react";
import classes from "./ReviewBox.module.css";
import { motion } from "framer-motion";

const ReviewBox = (props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: props.animationDelay }}
      viewport={{ once: true }}
      className={classes.reviewBox}
    >
      <div className={classes.reviewer}>
        <img src={props.image} alt="Profile" className={classes.profileImage} />
        <div className={classes.details}>
          <p className={classes.reviewerName}>{props.name}</p>
          <div className={classes.circles}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
          </div>
        </div>
      </div>
      <div className={classes.review}>
        <h4 className={classes.reviewTitle}>" {props.title} "</h4>
        <p className={classes.reviewText}>
          All the Lorem Ipsum generators on the Internet tend to repeat willings
          predefined chunks value.
        </p>
      </div>
    </motion.div>
  );
};

export default ReviewBox;
