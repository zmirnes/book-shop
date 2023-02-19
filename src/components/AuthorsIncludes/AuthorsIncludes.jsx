import classes from "./AuthorsIncludes.module.css";
import React from "react";
import Book from "./Book";
import book1 from "../../assets/images/authors-includes/book1.png";
import book2 from "../../assets/images/authors-includes/book2.png";

const books = [
  {
    id: "b1",
    title: "Atomics One's",
    description:
      "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
    pages: "586 pages",
    length: "10 hours",
    image: book1,
  },
  {
    id: "b2",
    title: "The Dark Light",
    description:
      "Many variations of passages of Lorem Ipsum willing araise  alteration in some form.",
    pages: "586 pages",
    length: "10 hours",
    image: book2,
  },
];

const AuthorsIncludes = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.sectionTitle}>Author's Includes</h3>
      <div className={classes.includes}>
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              description={book.description}
              pages={book.pages}
              length={book.length}
              image={book.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AuthorsIncludes;
