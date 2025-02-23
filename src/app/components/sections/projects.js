import { useState } from "react";
import ProjectItem from "./projectitem";

export default function Projects() {
  const projects = [
    {
      name: "Kinematica – Dispersing & Homogenizing Solutions",
      link: "https://www.kinematicausa.com/",
      description:"Kinematica is a premier provider of dispersing and homogenizing processing solutions, serving laboratories and production plants worldwide since 1962. kinematica expertise covers various industries, including pharmaceuticals, cosmetics, chemicals, life sciences, and food.",
      technologies: ["Next.js", "mySQL", "Laravel"],
      imageUrl: "/assets/projects/kinematica.svg",
    },
    {
      name: "RP Ateliers – Architectural design",
      link: "https://www.rpateliers.com/",
      description:"RP Ateliers specializes in architectural design, creating detailed building maps with high-resolution visuals. They offer a smooth and interactive user experience. Our focus is on optimizing high-resolution images to enhance performance without compromising quality.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "NestJS",
        "MongoDB",
        "AWS SDK for Javascript (v3)",
      ],
      imageUrl: "/assets/projects/rpa.svg",
    },
    {
      name: "Sebastian Voyage – Travel",
      link: "https://sebastianvoyage.com/",
      description:
        "Sebastian Voyage is a travel and hotel booking platform that provides users with real-time access to flights and accommodations. Built with Next.js for a fast and responsive frontend and Node.js with Express.js for a scalable backend, the website integrates Duffel API to ensure seamless booking experiences, real-time availability, and smooth transactions.",
      technologies: ["React.js", "Node.js", "Express.js ", "Duffel"],
      imageUrl: "/assets/projects/sebastian.png",
    },
    {
      name: "Rydelinx",
      link: "https://www.rydelinx.com/",
      description:
      "As a backend-focused software engineer, I played a key role in developing and maintaining Rydelinx, a ride-hailing app. Using Node.js and MongoDB, I built scalable backend systems, integrated third-party services like Stripe, Socket.IO, and Google APIs, and optimized performance with clustering. Collaborating with cross-functional teams, I contributed to a reliable and efficient platform that enhanced user experience.",
      technologies: [
        "Socket.io",
        "Redis",
        "MongoDB",
        "Node.js",
        "Stripe",
        "Express.js",
      ],
      imageUrl: "/assets/projects/logo-rydelinx.png",
    },
    {
      name: "Dragger",
      link: "https://github.com/mateenbhatti4/Dragger",
      description:
        "Dragger is an intuitive web builder designed to simplify website creation through an easy-to-use drag-and-drop interface. Built using Python, JavaScript, and jQuery, it enables users to design and customize websites without any coding knowledge. Dragger also features a built-in payment system, allowing users to purchase premium templates and plans for enhanced design flexibility. Whether for personal projects or business needs, Dragger streamlines the web development process, making it accessible to everyone.",
      technologies: ["jQuery", "Javascript", "Python", "Html"],
      imageUrl: "",
    }
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
      <div>
        {/* Heading */}
        <h1 className="text-4xl mb-8 font-bold tracking-tight text-slate-200 sm:text-5xl">
          Projects
        </h1>
        <ul>
          {projects
            .slice(0, showAll ? projects.length : 2)
            .map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
        </ul>
      </div>

      {/* Toggle Show All / Show Less */}
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200  font-semibold text-slate-200 group decoration-transparent hover:decoration-current transition duration-200"
          href="#projects"
          onClick={() => setShowAll(!showAll)}
        >
          <span className="whitespace-nowrap">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              {showAll ? "Show Less" : "Show All"} &nbsp;Projects
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
