import React from "react";
import classes from "./ChapterIncludes.module.css";
import ChapterBox from "./ChapterBox";

const chapters = [
  {
    id: "c1",
    chapterNumber: "Chapter - 01",
    chapterTitle: "Get Started Intro",
    chapterDescription:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
    pages: "85 pages",
    length: "1 Hour 15 mins",
    animationDelay: "0",
  },
  {
    id: "c2",

    chapterNumber: "Chapter - 02",
    chapterTitle: "Create a Massive Content",
    chapterDescription:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
    pages: "85 pages",
    length: "1 Hour 15 mins",
    animationDelay: "0.15",
  },
  {
    id: "c3",

    chapterNumber: "Chapter - 03",
    chapterTitle: "Maintaining the Creative Arcs",
    chapterDescription:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
    pages: "85 pages",
    length: "1 Hour 15 mins",
    animationDelay: "0.30",
  },
  {
    id: "c4",

    chapterNumber: "Chapter - 04",
    chapterTitle: "The Conclusion",
    chapterDescription:
      "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
    pages: "85 pages",
    length: "1 Hour 15 mins",
    animationDelay: "0.45",
  },
];

const ChapterIncludes = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.title}>The Chapter Includes</h1>
        <div className={classes.chapters}>
          {chapters.map((chapter) => {
            return (
              <ChapterBox
                key={chapter.id}
                number={chapter.chapterNumber}
                title={chapter.chapterTitle}
                description={chapter.chapterDescription}
                pages={chapter.pages}
                length={chapter.length}
                animationDelay={chapter.animationDelay}
              />
            );
          })}
        </div>
        <button className={classes.freeTrialBtn}>
          Start a 15-Days Free Trial
        </button>

        <span className={classes.shortDescription}>
          Short description abotu each chapter
        </span>
        <span className={classes.haveQuestion}>
          <a href="question" className={classes.questionText}>
            Have any question?
          </a>{" "}
          Contact us.
        </span>
      </div>
    </section>
  );
};

export default ChapterIncludes;
