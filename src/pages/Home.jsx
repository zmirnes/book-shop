import { Fragment } from "react";
import AboutAuthor from "../components/AboutAuthor/AboutAuthor";
import AuthorsIncludes from "../components/AuthorsIncludes/AuthorsIncludes";
import GetCopy from "../components/GetBookCopy/GetCopy";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/TrustedBy";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AuthorsIncludes />
      <AboutAuthor />
      <TrustedBy />
      <GetCopy />
    </Fragment>
  );
};

export default Home;
