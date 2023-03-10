import { Fragment } from "react";
import AboutAuthor from "../components/AboutAuthor/AboutAuthor";
import AuthorsIncludes from "../components/AuthorsIncludes/AuthorsIncludes";
import ChapterIncludes from "../components/ChapterIncludes/ChapterIncludes";
import GetCopy from "../components/GetBookCopy/GetCopy";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import WhatReadersSay from "../components/WhatReadersSay/WhatReadersSay";
import WhatWillYouLearn from "../components/WhatWillYouLearn/WhatWillYouLearn";
import Blog from "../components/Blog/Blog";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

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
      <ChapterIncludes />
      <WhatReadersSay />
      <Blog />
      <Subscribe />
      <Footer />
    </Fragment>
  );
};

export default Home;
