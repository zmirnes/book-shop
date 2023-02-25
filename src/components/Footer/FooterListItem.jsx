import React from "react";
import classes from "./FooterListItem.module.css";

const FooterListItem = (props) => {
  console.log(props);
  return (
    <li className={classes.listItem}>
      <div className={classes.circles}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
      </div>
      <a href={props.link.link} className={classes.link}>
        {props.link.linkTitle}
      </a>
    </li>
  );
};

export default FooterListItem;
