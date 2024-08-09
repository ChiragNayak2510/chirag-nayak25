import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="p-8">
      <div className="text-3xl font-bold mb-8 text-center text-white">Projects</div>
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
