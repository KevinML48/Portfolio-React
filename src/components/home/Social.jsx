import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaCamera, FaBehance } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/aroflytb/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://x.com/AroFly04"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>

      <a
        href="https://www.linkedin.com/in/quentin-courtieux-978b2422a/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.flickr.com/photos/202370812@N02/albums/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCamera />
      </a>

      <a
        href="https://www.behance.net/arofly1"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBehance />
      </a>
    </div>
  );
};

export default Social;
