import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="p-4 sm:p-4 md:p-6 lg:p-8">
      <div className="text-lg sm:text-3xl mb-4 sm:mb-4 md:mb-6 lg:mb-8 text-center text-white">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectItem
          image="chessNetCover.png"
          title="ChessNet"
          link="https://github.com/ChiragNayak2510/ChessNet.git"
        />
        <ProjectItem
          image="coLivingCover.png"
          title="CoLiving"
          link="https://github.com/ChiragNayak2510/CoLiving"
        />
        <ProjectItem
          image="movieCover.png"
          title="MovieReview"
          link="https://github.com/ChiragNayak2510/MovieReview.git"
        />
        <ProjectItem
          image="twitterCover.jpg"
          title="Skittles"
          link="https://github.com/ChiragNayak2510/Skittles.git"
        />
      </div>
    </div>
  );
};

export default Projects;
