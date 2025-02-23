import { useState } from "react";
import ProjectItem from "./projectitem";

export default function Projects() {
  const projects = [
    {
      name: "Stigmi Learning",
      link: "https://stigmilearning.com/",
      description:
        "I led the development of Stigmi Learning, an interactive learning platform designed to connect tutors and students. The platform, built with AdonisJS and MongoDB for the backend, and React for the frontend, provides a user-friendly experience for both students and educators, making personalized learning more accessible and efficient.",
      technologies: ["AdonisJs", "MongoDB", "Next.js", "Node.js", "ChatGPT"],
      imageUrl: "/assets/projects/logo-stigmi.png",
    },
    {
      name: "You Optimised",
      link: "https://www.youoptimised.com/",
      description:
        "I developed 'You Optimised,' a comprehensive health management platform using Next.js with Tailwind CSS for the frontend and NestJS for the backend. It features separate dashboards for doctors and patients, integrating the Terra API to fetch health stats from wearable devices for the patient dashboard.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "NestJS",
        "MongoDB",
        "AWS SDK for Javascript (v3)",
      ],
      imageUrl: "/assets/projects/logo-youoptimised.png",
    },
    {
      name: "Eddii Health",
      link: "https://www.eddiihealth.com/",
      description:
        "Eddii Health is a health-focused platform with tailored features for monitoring mental health, nutrition, and physical activity. I used React, TypeScript, and Firebase to build the platform's scalable architecture.",
      technologies: ["React", "TypeScript", "Firebase"],
      imageUrl: "/assets/projects/logo-eddii.png",
    },
    {
      name: "Respondent.io",
      link: "https://www.respondent.io/",
      description:
        "I led the development of a web application using Prismic CMS and Next.js. I designed and implemented a custom UI using Tailwind CSS. My responsibilities encompassed the full project lifecycle, from concept to deployment, and included both front-end and back-end development. This experience allowed me to refine my skills in web development and UI/UX design, demonstrating my ability to work independently on a full-stack project",
      technologies: ["Prismic CMS", "Next.js"],
      imageUrl: "/assets/projects/logo-responded.svg",
    },
    {
      name: "Usee-360",
      link: "https://usee-360.com/",
      description:
        "I contributed to the development of Usee-360, a revolutionary real estate application. Working alongside a talented team, I played a key role in implementing the frontend using React and developing the backend infrastructure with Node.js and PostgreSQL. Usee-360 offers users an immersive 360-degree viewing experience, transforming the way they interact with property listings. Together, we created a scalable and intuitive solution that revolutionized the real estate industry by leveraging the power of React for the frontend and utilizing Node.js and PostgreSQL for the backend.",
      technologies: ["Node.js", "React.js", "PostgreSQL", "Express.js"],
      imageUrl: "/assets/projects/logo-usee.png",
    },
    {
      name: "InvoHub",
      link: "https://hub.invozone.com/",
      description:
        "I had the incredible opportunity to contribute significantly to Invohub, an advanced ERP software. As an integral part of the team, I played a pivotal role in elevating the code architecture and enhancing the overall code quality. Through the adoption of TypeScript, we successfully migrated the codebase, harnessing its benefits to drive improved efficiency, scalability, and maintainability. This exhilarating project allowed me to further refine my expertise in code architecture while delivering a robust and cutting-edge ERP solution.",
      technologies: [
        "NestJS",
        "Node.js",
        "React.js",
        "PostgreSQL",
        "TypeScript",
        "Next.js",
      ],
      imageUrl: "/assets/projects/logo-invohub.png",
    },
    {
      name: "Revbits ZTN",
      link: "https://www.revbits.com/",
      description:
        "I had the opportunity to work on an innovative cybersecurity project called RevBits Zero Trust Network. As part of a skilled team, we developed a secure remote access solution using Node.js, Angular, and PostgreSQL. This project aimed to address the security challenges faced by organizations in managing remote workforce, BYOD assets, and third-party access. The solution incorporated encryption, authentication, and granular access controls, ensuring secure and controlled connectivity to internal network assets and applications. By leveraging the power of PostgreSQL, we implemented robust and scalable data storage for the solution. It was a rewarding experience to be involved in building a cutting-edge product that enhances network security in today's dynamic threat landscape.",
      technologies: [
        "Socket.io",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "AngularJS",
      ],
      imageUrl: "/assets/projects/logo-revbits.svg",
    },
    {
      name: "Rydelinx",
      link: "https://www.rydelinx.com/",
      description:
        "As a software engineer specializing in backend and architecture, I played a vital role in the development and maintenance of the ride-hailing app called Rydelinx. I was responsible for designing and implementing robust backend systems using Node.js and utilized a MongoDB database for efficient data storage and retrieval. In addition, I integrated various third-party services and APIs, such as Stripe for payment processing, Socket.IO for real-time communication, and Google APIs for location services. To ensure scalability and performance, I leveraged cluster technology to optimize the app's performance under high loads. Throughout the project, I collaborated with cross-functional teams, including frontend developers, product managers, and quality assurance engineers, to deliver high-quality software solutions. My contributions helped create a reliable and efficient platform that enhanced the user experience and optimized the overall performance of Rydelinx.",
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
