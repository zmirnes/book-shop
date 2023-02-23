import React from "react";
import classes from "./Blog.module.css";
import post1 from "../../assets/images/BlogPost/post1.png";
import post2 from "../../assets/images/BlogPost/post2.png";
import post3 from "../../assets/images/BlogPost/post3.png";
import BlogPost from "./BlogPost";

const blogPosts = [
  {
    id: 1,
    title: "The energy efficiency offers hydrotherapy or swim",
    description:
      "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
    image: post1,
    author: "Author",
    date: "05.01.2023",
  },
  {
    id: 2,
    title: "Release of Letraset sheets tools containing  passages",
    description:
      "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
    image: post2,
    author: "Author",
    date: "10.02.2023",
  },
  {
    id: 3,
    title: "The energy efficiency offers hydrotherapy or swim",
    description:
      "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.",
    image: post3,
    author: "Author",
    date: "14.02.2023",
  },
];

const Blog = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.title}>Articles & Resources</h1>
        <div className={classes.blogPosts}>
          {blogPosts.map((post) => {
            return (
              <BlogPost
                key={post.id}
                title={post.title}
                description={post.description}
                thumbnail={post.image}
                author={post.author}
                date={post.date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
