import React from "react";
import classes from "./WhatWillYouLearn.module.css";
import SectionBox from "./SectionBox";
import image from "../../assets/images/what-will-you-learn/image.png";
import { motion } from "framer-motion";

const WhatWillYouLearn = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.title}>What Will You Learn?</h1>
        <div className={classes.content}>
          <div className={classes.boxes}>
            <SectionBox
              number="1"
              text="Use HDFS & Map Reduce for storing & analyzing data at scale."
              animationDelay="0"
            />
            <SectionBox
              number="2"
              text="Consume streaming data using Spark Streaming, Flink, and Storm."
              animationDelay="0.15"
            />
            <SectionBox
              number="3"
              text="Choose an appropriate data storage technology for your application"
              animationDelay="0.3"
            />
            <SectionBox
              number="4"
              text="Analyze non-relational data using HBase, Cassandra, and MongoDB."
              animationDelay="0.45"
            />
          </div>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            src={image}
            alt="Person reading book"
            className={classes.image}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWillYouLearn;
