import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="p-4 sm:p-4 md:p-6 lg:p-8">
      <div className="text-lg sm:text-3xl mb-4 sm:mb-4 md:mb-6 lg:mb-8 text-center text-white">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectItem
          image="twitterCover.jpg"
          title="Skittles"
          link="https://example.com/project4"
        />
        <ProjectItem
          image="path/to/cover-image2.jpg"
          title="MovieReview"
          link="https://example.com/project2"
        />
        <ProjectItem
          image="path/to/cover-image3.jpg"
          title="Roomie-Network"
          link="https://example.com/project3"
        />
        <ProjectItem
          image="path/to/cover-image3.jpg"
          title="ChessNet"
          link="https://example.com/project1"
        />
      </div>
    </div>
  );
};

export default Projects;
