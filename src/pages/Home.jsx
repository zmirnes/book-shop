import { Fragment } from "react";
import AboutAuthor from "../components/AboutAuthor/AboutAuthor";
import AuthorsIncludes from "../components/AuthorsIncludes/AuthorsIncludes";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AuthorsIncludes />
      <AboutAuthor />
    </Fragment>
  );
};

export default Home;
