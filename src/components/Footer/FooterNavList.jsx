import React from "react";
import FooterListItem from "./FooterListItem";
import classes from "./FooterNavList.module.css";

const FooterNavList = (props) => {
  return (
    <ul className={classes.list}>
      <h4 className={classes.title}>{props.title}</h4>
      {props.links.map((link) => {
        return <FooterListItem link={link} />;
      })}
    </ul>
  );
};

export default FooterNavList;
