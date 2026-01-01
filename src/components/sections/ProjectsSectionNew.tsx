"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/Projects";
import ProjectCard from "@/components/ProjectCard";
import SearchInput from "@/components/SearchInput";

const ProjectsSectionNew = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="w-full max-w-3xl mx-auto h-full flex flex-col py-4">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search projects..."
        />
      </div>

      {/* Projects List */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))
        ) : (
          <div className="text-center text-white/40 py-8">
            No projects found
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSectionNew;
