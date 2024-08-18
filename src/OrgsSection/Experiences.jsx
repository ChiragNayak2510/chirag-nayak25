import React from "react";
import ExperienceItem from "./ExperienceItem";
export default function Experience(){
    return (
      <div className="p-2">
        <div className="text-lg sm:text-3xl mb-2 sm:mb-4 md:mb-8 lg:mb-8 text-center text-white">Experiences</div>
        <ExperienceItem
          logo="wellmLogo.png" 
          title="Software Engineer Intern"
          company="WellM"
        />
      </div>
    );
  };
  