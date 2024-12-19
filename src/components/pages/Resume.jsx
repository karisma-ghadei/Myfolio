import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="left">
        <div className="info zoom-in">
          <h1>karisma ghadei</h1>
          <p>MERN Stack Developer</p>
          <p>karismaghadei2001@gamil.com</p>
          <p>
            <i class="ri-map-pin-line"></i> Odisha | India
          </p>
        </div>

        <div className="buttons info zoom-in">
          <a href="https://github.com/karisma-ghadei" target="_blank">
            <i class="ri-github-line"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/karisma-ghadei-68563a299/"
            target="_blank"
          >
            <i class="ri-linkedin-line"></i> Linkedin
          </a>
          <a
           href=" https://www.youtube.com/@mkluzuu7534"
            target="_blank"
          >
            <i class="fa-brands fa-youtube"></i> Utube
          </a>
          <a href="#" target="_blank">
            <i class="ri-file-chart-line"></i> Resume
          </a>
        </div>
      </div>

      <div className="right fade-up">
        
          

        <div className="skills">
          <h1> Skills</h1>
          <ul>
            <li>Python</li>
           <li>JavaScript</li>
           <li>MongoDB</li>
           <li>Node JS /Express</li>
            <li>React js</li>
            <li>Html,Css</li>
            <li>Git / Github</li>
          </ul>
        </div>

        <div className="soft-skills">
          <h1> Soft Skills</h1>
          <ul>
            
            <li>Problem solving</li>
            <li>Adaptility</li>
            <li>Ability to learn quickly</li>
            <li>Attention to details</li>
            <li>Team work & collaboration</li>
            <li>Critical thinking</li>
          </ul>
        </div>

        <div className="certificate">
          <h1> Certificates</h1>
          <ul>
            <li> Frontend Development (HTML) </li>
            <li>Full Stack Web Development By  APNA Collage</li>
            <li>React by APNA Collage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;