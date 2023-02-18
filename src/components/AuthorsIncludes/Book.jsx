import React from "react";
import classes from "./Book.module.css";

const Book = (props) => {
  return (
    <div className={classes.book} key={props.id}>
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
    </div>
  );
};

export default Book;
