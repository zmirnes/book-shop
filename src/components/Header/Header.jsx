import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import classes from "./Header.module.css";
import NavLinks from "./NavLinks";
import facebook from "../../assets/images/social/facebook.svg";
import twitter from "../../assets/images/social/twitter.svg";
import linkedin from "../../assets/images/social/linkedIn.svg";

const Header = () => {
  const [headerClasses, setHeaderClasses] = useState(0);

  window.addEventListener("scroll", () => {
    window.scrollY > 50
      ? setHeaderClasses(`${classes.header} ${classes.sticky}`)
      : setHeaderClasses(classes.header);
  });

  return (
    <header className={headerClasses}>
      <div className={classes.headerWrapper}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
          <span className={classes.logoText}>Pages</span>
        </div>
        <div className={classes.socialIcons}>
          <a href="#facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#twitter">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#linkedin">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
