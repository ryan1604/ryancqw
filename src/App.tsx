import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // If no saved preference, check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Update document class
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="max-w-4xl mx-auto flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
