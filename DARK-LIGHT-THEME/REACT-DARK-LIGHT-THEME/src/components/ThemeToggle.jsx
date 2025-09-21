import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="theme-container">
      <button onClick={toggleTheme} className="theme-button">
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </div>
  );
}

export default ThemeToggle;
