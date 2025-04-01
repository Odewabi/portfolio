import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="links">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/about" className="mx-2">About</Link>
          <Link to="/portfolio" className="mx-2">Projects</Link>
          <Link to="/contact" className="mx-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
