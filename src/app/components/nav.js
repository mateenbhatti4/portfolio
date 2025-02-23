import { useState, useEffect } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "projects", "contact"];
      const offsets = sections.map(
        (id) => document.getElementById(id)?.offsetTop || 0
      );

      const currentSection = sections.reduce((acc, section, i) => {
        if (window.scrollY >= offsets[i] - 100) {
          return section;
        }
        return acc;
      }, "about");

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-4 w-max">
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "experience" ? "text-white" : "text-slate-500"
            }`}
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("experience");
            }}
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 transition-all ${
                activeSection === "experience"
                  ? "w-16 bg-white"
                  : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-sm font-bold uppercase tracking-widest ${
                activeSection === "experience"
                  ? "text-white"
                  : "text-slate-500 group-hover:text-slate-200"
              }`}
            >
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "skills" ? "text-white" : "text-slate-500"
            }`}
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("skills");
            }}
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 transition-all ${
                activeSection === "skills"
                  ? "w-16 bg-white"
                  : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-sm font-bold uppercase tracking-widest ${
                activeSection === "skills"
                  ? "text-white"
                  : "text-slate-500 group-hover:text-slate-200"
              }`}
            >
              Skills
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "projects" ? "text-white" : "text-slate-500"
            }`}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("projects");
            }}
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 transition-all ${
                activeSection === "projects"
                  ? "w-16 bg-white"
                  : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-sm font-bold uppercase tracking-widest ${
                activeSection === "projects"
                  ? "text-white"
                  : "text-slate-500 group-hover:text-slate-200"
              }`}
            >
              Projects
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "contact" ? "text-white" : "text-slate-500"
            }`}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("contact");
            }}
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 transition-all ${
                activeSection === "contact"
                  ? "w-16 bg-white"
                  : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-sm font-bold uppercase tracking-widest ${
                activeSection === "contact"
                  ? "text-white"
                  : "text-slate-500 group-hover:text-slate-200"
              }`}
            >
              Contact
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
