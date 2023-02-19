import React from "react";
import classes from "./TrustedItem.module.css";

const TrustedItem = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.logo} alt="Company Logo" className={classes.logo} />
      <h4 className={classes.companyName}>{props.name}</h4>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default TrustedItem;
