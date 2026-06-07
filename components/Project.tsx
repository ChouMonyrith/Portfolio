import React from "react";
import Projects from "@/data/Project";
import { ProjectCard } from "./ProjectCard";
function Project() {
  return (
    <section
      id="projects"
      className="py-12 px-6 md:px-12 max-w-8xl mx-auto text-black scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-black pl-4">
        Academic Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6 text-black">
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
