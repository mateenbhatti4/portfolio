import React, { useState, useEffect } from "react";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Project Image */}
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.name}
            className="rounded-lg mb-6 w-64 max-h-60 object-cover"
          />
        )}

        {/* Project Name */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4 sm:text-xl">
          {project.name}
        </h2>

        {/* Project Description */}
        <p className="text-gray-700 text-md mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies List */}
        <ul className="flex flex-wrap mb-6">
          {project.technologies.map((tech, index) => (
            <li key={index} className="mr-3 mb-2">
              <span className="px-3 py-2 bg-gray-700 text-indigo-100 rounded-full text-xs font-medium">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        {/* Project Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-teal-500 underline block mb-6"
        >
          Visit Project Link
        </a>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function ProjectItem({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className="mb-12">
      <div
        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        onClick={handleClick} // Trigger the popup on click
      >
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <span className="inline-flex items-baseline text-lg sm:text-xl font-medium leading-tight text-gray-200 hover:text-teal-300 focus-visible:text-teal-300 group/link">
              {project.name}
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </h3>
          <p className="mt-2 text-md leading-normal">{project.description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {isModalOpen && project.imageUrl && (
          <img
            alt={project.name}
            loading="lazy"
            width={200}
            height={48}
            decoding="async"
            data-nimag="1"
            className="transition group-hover:border-gray-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            style={{ color: "transparent" }}
            src={project.imageUrl}
          />
        )}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <ProjectModal project={project} onClose={handleCloseModal} />
      )}
    </li>
  );
}

export default ProjectItem;
