import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icon">
        <a href="https://www.youtube.com/@mkluzuu7534" target="_blank">
        <i class="ri-youtube-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/karisma-ghadei-68563a299/"
          target="_blank"
        >
          <i class="ri-linkedin-line"></i>
        </a>
        <a href="https://github.com/karisma-ghadei" target="_blank">
          <i class="ri-github-line"></i>
        </a>
      </div>
      <div className="line">
        <p>Made By Karisma</p>
      </div>
    </div>
  );
};

export default Footer;