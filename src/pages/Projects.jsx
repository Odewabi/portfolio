import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-84ce0-default-rtdb.firebaseio.com/portfolio.json"
        );
        const data = await response.json();

        const loadedProjects = Object.keys(data).map(key => ({
          id: key,
          title: data[key].title,
          description: data[key].description,
          skills: data[key].skills,
          technologies: data[key].technologies,
        }));

        setProjects(loadedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="portfolio">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Skills:</strong> {project.skills}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
      <p>
          You can view more of my work on{" "}
        <a
          href="https://github.com/Odewabi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>.
      </p>

      <p>
        If you'd like to get in touch, visit my{" "}
        <Link to="/contact" className="contact-link">Contact Page</Link>.
      </p>
    </section>
  );
};

export default Portfolio;
