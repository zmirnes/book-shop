import React from "react";
import authorImage from "../../assets/images/aboutAuthor/authorImage.png";
import qrCode from "../../assets/images/aboutAuthor/qr.png";
import classes from "./AboutAuthor.module.css";
import { motion } from "framer-motion";
const AboutAuthor = () => {
  return (
    <div className={classes.container}>
      <motion.img
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        src={authorImage}
        alt="AuthorImage"
        className={classes.authorImage}
      />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className={classes.aboutAuthor}
      >
        <h1 className={classes.title}>About Author</h1>
        <p className={classes.aboutParagraph}>
          All the Lorem Ipsum generators on the Internet tend to repeated
          predefined chunks as necessary, making this the first true value
          generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful.
        </p>
        <div className={classes.counter}>
          <div className={classes.counterItem}>
            <span className={classes.counterValue}>02</span>
            <span className={classes.counterTitle}>Books Published</span>
          </div>
          <div className={classes.counterItem}>
            <span className={classes.counterValue}>4.5</span>
            <span className={classes.counterTitle}>User Reviews</span>
          </div>
          <div className={classes.counterItem}>
            <span className={classes.counterValue}>04</span>
            <span className={classes.counterTitle}>Best Sellers Awards</span>
          </div>
        </div>
        <div className={classes.authorDetails}>
          <div className={classes.qrContainer}>
            <img src={qrCode} alt="QR" className={classes.qr} />
          </div>
          <div className={classes.details}>
            <span className={classes.authorName}>John Abraham , Ph.d</span>
            <span className={classes.authorEmail}>
              Mail : johnabraham@gmail.com
            </span>
            <span className={classes.authorPhone}>
              Phone : (+2) 123 545 9000
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutAuthor;
