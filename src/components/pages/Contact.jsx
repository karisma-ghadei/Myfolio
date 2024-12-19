
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left fade-up">
        <div className="info">
          <h1>Karisma ghadei</h1>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <i class="ri-mail-send-line"></i> Email Me
          </a>
          <p>
            <i class="ri-map-pin-line"></i> Odisha | India
          </p>
        </div>

        <div className="buttons info">
          <a href="https://www.youtube.com/@mkluzuu7534" target="_blank">
          <i class="ri-youtube-line"></i>Youtube
          </a>
          <a href="https://www.linkedin.com/in/karisma-ghadei-68563a299/" target="_blank">
            <i class="ri-linkedin-line"></i> Linkedin
          </a>
          <a href="https://github.com/karisma-ghadei" target="_blank">
            <i class="ri-instagram-line"></i> Github
          </a>
          <a href="#" target="_blank">
            <i class="ri-file-chart-line"></i> Resume
          </a>
        </div>
      </div>

      <div className="right-side zoom-in">
        <form action="">
          <input type="text" placeholder="Name" />

          <input type="email" placeholder="Email" />

          <textarea
            name=""
            id=""
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;