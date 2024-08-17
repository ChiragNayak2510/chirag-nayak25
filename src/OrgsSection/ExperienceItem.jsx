import React from "react";
import { GoArrowRight } from "react-icons/go";
export default function ExperienceItem({ logo, title,company}){
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center p-6 rounded-lg text-white mb-6 gap-6">
      <img src={logo} alt={`${company} logo`} className="w-1/4 h-1/4 sm:h-1/4 sm:w-1/4 md:h-1/6 md:w-1/6 lg:h-1/12 lg:w-1/12 sm:object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
      <div className="flex-grow">
        <div className="text-sm md:text-xl font-bold">{title}<span className="text-balance text-sm text-gray-300"> at</span><span> {company}</span></div>
        <div>
        <ul className="text-sm md:text-lg list-none p-0 text-gray-300">
        <li className="flex items-center space-x-2">
            <GoArrowRight />
            <span>Developed and optimized <strong className="font-bold">Backend solutions</strong> using <strong className="font-bold">NodeJs</strong>.</span>
        </li>
        </ul>
        <ul className="text-sm md:text-lg list-none p-0 text-gray-300">
        <li className="flex items-center space-x-2">
            <GoArrowRight />
            <span>Improved <strong className="font-bold">Mobile and Web</strong> Applications User Interface using <strong className="font-bold">Flutter</strong>.</span>
        </li>
        </ul>
        <ul className="text-sm md:text-lg list-none p-0 text-gray-300">
        <li className="flex items-center space-x-2">
            <GoArrowRight />
            <span>Implemented serverless logic to execute <strong className="font-bold">Cron Jobs</strong> with <strong className="font-bold">Firebase Cloud Functions</strong>.</span>
        </li>
        </ul>

        </div>
        {/* <div className="mt-4">
          <span className="font-semibold">Skills: </span>
          <span className="text-gray-300">{skills.join(", ")}</span>
        </div> */}
      </div>
    </div>
  );
};
