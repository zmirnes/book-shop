import { Fragment } from "react";
import AboutAuthor from "../components/AboutAuthor/AboutAuthor";
import AuthorsIncludes from "../components/AuthorsIncludes/AuthorsIncludes";
import GetCopy from "../components/GetBookCopy/GetCopy";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import WhatWillYouLearn from "../components/WhatWillYouLearn/WhatWillYouLearn";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AuthorsIncludes />
      <AboutAuthor />
      <TrustedBy />
      <GetCopy />
      <WhatWillYouLearn />
    </Fragment>
  );
};

export default Home;
