import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-intro">
          Hello, I'm <span className="highlighted-name">Oluwatomisin Odewabi</span>, a passionate software developer.
          I specialize in a wide range of programming languages and technologies, including Python, Java, C#, SQL, React, and more.
        </p>
        <p className="home-summary">
          Here, you'll find details about my projects, skills, and experience. I enjoy solving complex problems and building
          efficient, scalable solutions. Feel free to explore my portfolio and contact me if you'd like to connect!
        </p>
        <Link to="/about" className="cta-button">Learn More About Me</Link>
      </div>
    </section>
  );
};

export default Home;
