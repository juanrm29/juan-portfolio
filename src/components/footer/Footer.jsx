import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">JUAN MAULANA</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/juanrm29"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-github"></i>{" "}
            <span className="social__small-Text">Github</span>
          </a>
          <a
            href="https://www.instagram.com/juanmaulana29/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>{" "}
            <span className="social__small-Text">Instagram</span>
          </a>
          <a
            href="https://twitter.com/juanmaulana29"
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>{" "}
            <span className="social__small-Text">Twitter</span>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Juan Maulana. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
