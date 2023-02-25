import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/social/facebook.svg";
import twitter from "../../assets/images/social/twitter.svg";
import linkedin from "../../assets/images/social/linkedIn.svg";
import FooterNavList from "./FooterNavList";

const exploreNavList = [
  {
    linkTitle: "Home",
    link: "#",
  },
  {
    linkTitle: "About Us",
    link: "#",
  },
  {
    linkTitle: "Services",
    link: "#",
  },
  {
    linkTitle: "Appointments",

    link: "#",
  },
  {
    linkTitle: "Blog",
    link: "#",
  },
  {
    linkTitle: "Contact Us",
    link: "#",
  },
];

const utilityPagesNavList = [
  {
    linkTitle: "Start Here",
    link: "#",
  },
  {
    linkTitle: "Style Guide",
    link: "#",
  },
  {
    linkTitle: "404 not found",
    link: "#",
  },
  {
    linkTitle: "Password protected",
    link: "#",
  },
  {
    linkTitle: "Licenses",
    link: "#",
  },
  {
    linkTitle: "Changelog",
    link: "#",
  },
];

const Footer = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.logoAndSocial}>
          <div className={classes.logo}>
            <img src={logo} alt="Logo" className={classes.logoImage} />
            <h1 className={classes.logoText}>Pages</h1>
          </div>
          <div className={classes.socialIcons}>
            <a href="facebook">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="facebook">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="facebook">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <FooterNavList title="Explore" links={exploreNavList} />
        <FooterNavList title="Utility Pages" links={utilityPagesNavList} />
        <div className={classes.keepInTouch}>
          <h4 className={classes.title}>Keep In Touch</h4>
          <div className={classes.infoBox}>
            <span className={classes.infoTitle}>Adress:</span>
            <span className={classes.infoValue}>
              24A Kingston St, Los Vegas NC 28202, USA
            </span>
          </div>
          <div className={classes.infoBox}>
            <span className={classes.infoTitle}>Mail:</span>
            <span className={classes.infoValue}>support@doctors.com</span>
          </div>
          <div className={classes.infoBox}>
            <span className={classes.infoTitle}>Phone:</span>
            <span className={classes.infoValue}>(+22) 123 - 4567 - 900</span>
          </div>
        </div>
        <div className={classes.copyright}>
          <span className={classes.copyrightText}>
            &copy; Creadet by
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mirneszahirovic.me"
            >
              Mirnes Zahirović
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
