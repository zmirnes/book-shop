import React from "react";
import classes from "./SectionBox.module.css";
import { motion } from "framer-motion";

const SectionBox = (props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: props.animationDelay }}
      viewport={{ once: true }}
      className={classes.box}
    >
      <div className={classes.numberBox}>
        <span className={classes.number}>{props.number}</span>
      </div>
      <p className={classes.text}>{props.text}</p>
    </motion.div>
  );
};

export default SectionBox;
