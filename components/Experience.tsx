import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";

function Experience() {
  return (
    <section
      id="experiences"
      className="py-12 px-6 md:px-12 max-w-8xl mx-auto text-black scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-black pl-4">
        Education & Experience
      </h2>
      <div className="grid md:grid-cols-3 gap-6 text-black">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
