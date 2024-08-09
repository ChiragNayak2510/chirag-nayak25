import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ image, title, link }) => {
  return (
    <div className="relative bg-gray-800 p-6 rounded-lg text-white overflow-hidden h-64">
      <img
        src={image}
        alt={`Cover for ${title}`}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative z-10 flex flex-col justify-end h-full p-4">
        <div className="absolute bottom-2 left-2 z-20">
          <h2 className="bg-white text-black rounded-3xl p-2">{title}</h2>
        </div>
        <div className="absolute bottom-2 right-2 z-20">
          <a
            href={link}
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
