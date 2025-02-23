"use client";
import { useEffect } from "react";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Social from "./components/social";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";

export default function Home() {
  useEffect(() => {
    const backgroundElement = document.querySelector("div.__variable_20b187");

    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      backgroundElement.style.background = `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <body
      className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      cz-shortcut-listen="true"
    >
      <div id="__next" className="relative">
        <div className="__variable_20b187 fixed inset-0 z-0 pointer-events-none"></div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-10">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <Hero />
              <Nav />
              <Social />
            </header>
            <main id="content" className="pt-40 lg:w-1/2 lg:py-24">
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        </div>
      </div>
    </body>
  );
}
