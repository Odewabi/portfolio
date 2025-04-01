import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hi! I'm <strong>Oluwatomisin Odewabi</strong>, a passionate software developer.
          I'm currently enrolled in Computer Science courses, gaining hands-on experience 
          in Bash programming, Python, SQL, Java, C, React, and Operating System internals.
        </p>
        <p>
          My studies cover database management, system programming, and web development.
          I love solving complex problems and creating scalable, efficient solutions.
        </p>
        <p>
          You can check out my projects here:{" "}
          <Link to="/portfolio" className="project-link">View My Projects</Link>
        </p>
      </div>
    </section>
  );
};

export default About;
