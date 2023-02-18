import { Fragment } from "react";
import AuthorsIncludes from "../components/AuthorsIncludes/AuthorsIncludes";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AuthorsIncludes />
    </Fragment>
  );
};

export default Home;
