import React from "react";
import ExperienceItem from "./ExperienceItem";
export default function Experience(){
    return (
      <div className="p-8">
        <div className="text-3xl mb-8 text-center text-white">Experiences</div>
        <ExperienceItem
          logo="wellmLogo.png" // Replace with the actual path to the logo image
          title="Software Engineer Intern"
          company="WellM"
        />
      </div>
    );
  };
  