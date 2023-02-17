import React from "react";
import cart from "../../assets/images/cart.svg";
import classes from "./NavLinks.module.css";
import hamburgerMenu from "../../assets/images/hamburgerMenu.svg";

const NavLinks = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navLinks}>
        <li className={classes.navItem}>
          <a href="#home" className={`${classes.navLink} ${classes.active}`}>
            Home
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="#pages" className={classes.navLink}>
            Pages
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="#about" className={classes.navLink}>
            About
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="#services" className={classes.navLink}>
            Services
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="#contact" className={classes.navLink}>
            Contact
          </a>
        </li>
      </ul>
      <div className={classes.cartIcon}>
        <img src={cart} alt="Cart" />
      </div>
      <button className={classes.orderBtn}>Order Today</button>
      <div className={classes.hamburgerMenu}>
        <img
          src={hamburgerMenu}
          alt="Menu"
          className={classes.hamburgerMenuIcon}
        />
      </div>
    </nav>
  );
};

export default NavLinks;
