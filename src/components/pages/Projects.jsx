import React, { useEffect } from "react";
import "./projects.css";

const Projects = () => {
  useEffect(() => {
    const windows = document.querySelectorAll(".window");

    windows.forEach((window, index) => {
      setTimeout(() => {
        window.classList.add("zoom-in");
      }, index * 100);
    });
  }, []);

  return (
    <div className="work">
      <h1> Have a look at my work 💞 💻 </h1>

      <div className="work_cards">
        <div className="window">
          <h2>ZERODHA CLONE</h2>

          <div className="languages">
           
            <span id="purple">JavaScript</span>
            <span id="yellow">React</span>
            <span id="green">Bootstrap</span>
          </div>

          <br />

          <div className="btn">
            <a href="#">
              <i className="ri-github-fill"></i>
            </a>
            <a href="#">
              <i className="ri-links-fill"></i>
            </a>
          </div>
        </div>

        <div className="window">
          <h2>Air bnb</h2>

          <div className="languages">
            <span id="pink">html</span>
            <span id="purple">JavaScript</span>
            <span id="yellow">Node JS /Express</span>
            <span id="blue">MongoDB</span>
            <span id="green">Bootstrap</span>
          </div>

          <br />

        </div>

        <div className="window">
          <h2>To Do App</h2>

          <div className="languages">
            
            <span id="blue">Html</span>
            <span id="green">JavaScript</span>
            <span id="yellow">CSS</span>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Projects;