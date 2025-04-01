import { useEffect, useState } from "react";
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-84ce0-default-rtdb.firebaseio.com/portfolio.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const responseData = await response.json();

        if (!responseData) {
          throw new Error("No projects found.");
        }

        const loadedProjects = Object.keys(responseData).map((key) => ({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          skills: responseData[key].skills,
          technologies: responseData[key].technologies,
        }));

        setProjects(loadedProjects);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (httpError) {
    return <p style={{ color: "red" }}>Error: {httpError}</p>;
  }

  return (
    <section>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <strong>Skills:</strong> {project.skills}
            <br />
            <strong>Technologies:</strong> {project.technologies}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
