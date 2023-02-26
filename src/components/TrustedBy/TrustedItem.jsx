import React from "react";
import classes from "./TrustedItem.module.css";
import { motion } from "framer-motion";

const TrustedItem = (props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: props.animationDelay }}
      className={classes.item}
    >
      <img src={props.logo} alt="Company Logo" className={classes.logo} />
      <h4 className={classes.companyName}>{props.name}</h4>
      <p className={classes.description}>{props.description}</p>
    </motion.div>
  );
};

export default TrustedItem;
