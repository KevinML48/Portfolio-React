import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Quentin Courtieux</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Informations
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Compétences
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://x.com/AroFly04"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/aroflytb/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/quentin-courtieux-978b2422a/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://www.flickr.com/photos/202370812@N02/albums/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-camera"></i>
          </a>

          <a
            href="https://www.behance.net/arofly1"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-behance"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
