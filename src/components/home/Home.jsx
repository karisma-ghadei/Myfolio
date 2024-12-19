import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("zoom-in");
      }, index * 100);
    });
  }, []);

  const aboutClick = () => {
    navigate("/about");
  };

  const resumeClick = () => {
    navigate("/resume");
  };

  const projectClick = () => {
    navigate("/projects");
  };

  const contactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="home">
        <div className="card" id="about" onClick={aboutClick}>
          <div className="img_box">
            <img
              src="https://media.istockphoto.com/id/1191604766/photo/portrait-of-happy-young-beautiful-woman-smiling-with-arms-crossed.jpg?s=1024x1024&w=is&k=20&c=hKTh54Fetn7nkJf1cd_HnWuce4A_T0JsLylnqbZxchw="
              alt=""
            />
          </div>
          <div className="text">
            <h2> Hey, I'm Karisma </h2>

            <div className="desc">
              <p> MERN Stack Developer </p>
              <span>
                <i className="ri-arrow-right-double-fill"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card" id="resume" onClick={resumeClick}>
          <i className="ri-file-list-3-line"></i>
          <h2> Resume</h2>
        </div>

        <div className="card" id="project" onClick={projectClick}>
          <i className="ri-mac-line"></i>
          <h2>My Work</h2>
        </div>

        <div className="card" id="contact" onClick={contactClick}>
          <i className="ri-contacts-book-3-line"></i>
          <h2>Contact Me</h2>
        </div>

        <div className="card" id="tech">
          <h2>Technologies I Like The Most</h2>
          <div className="icons">
           
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221387/javascript_jkypiq.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221388/mysql_tchl4d.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221387/html_giqtht.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221385/css_nxyypr.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221385/react_ps6f2i.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221385/tailwindcss_mdw6yy.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221388/mongodb_nrt5lx.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dfzahogmp/image/upload/v1723221387/github_ku6j2c.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;