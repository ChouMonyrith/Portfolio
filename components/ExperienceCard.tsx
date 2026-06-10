import React from "react";
import Experience from "@/type/Experience";

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="border border-black/20 bg-white/50 hover:bg-white backdrop-blur-md px-5 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group">
      <div className="flex items-center mb-2 text-lg font-bold text-black group-hover:text-black transition-colors">
        {experience.title}
        <span className="ml-2 text-sm font-normal text-gray-700">
          ({experience.tag})
        </span>
      </div>
      <div className="mb-3 text-md font-medium text-black">
        {experience.company} | {experience.startDate} - {experience.endDate}
        {experience.status ? ` | ${experience.status}` : ""}
      </div>
      <ul className="space-y-1 text-md text-black">
        {experience.description.map((desc, index) => (
          <li key={index} className="pl-1">
            • {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
