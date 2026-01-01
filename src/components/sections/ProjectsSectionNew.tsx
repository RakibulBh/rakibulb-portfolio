"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, ProjectType } from "@/data/Projects";
import { Github, ExternalLink } from "lucide-react";

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
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-card/50 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors text-sm"
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

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/50 rounded-xl border border-white/10 hover:border-primary/50 overflow-hidden transition-all"
    >
      {/* Image/Video Section */}
      {(project.img || project.video) && (
        <div className="w-full h-48 bg-white/5 relative">
          {project.video ? (
            <video
              src={project.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : project.img ? (
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
      )}

      {/* Content Section */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-2.5 py-1"
            >
              <Image
                width={14}
                height={14}
                alt={tech.name}
                src={`/svgs/${tech.img}.svg`}
                className="w-3.5 h-3.5"
              />
              <span className="text-white/70 text-xs">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/60 hover:text-primary transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit</span>
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/60 hover:text-primary transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSectionNew;
