import React from "react";
import classes from "./BlogPost.module.css";

const BlogPost = (props) => {
  return (
    <div className={classes.post}>
      <img
        src={props.thumbnail}
        alt="Thumbnail"
        className={classes.thumbnail}
      />
      <div className={classes.postDetails}>
        <h4 className={classes.postTitle}>{props.title}</h4>
        <span className={classes.smallDescription}>{props.description}</span>
        <div className={classes.actions}>
          <a href="#post" className={classes.readMoreBtn}>
            Read more
          </a>
          <span className={classes.published}>
            {props.author} - {props.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
