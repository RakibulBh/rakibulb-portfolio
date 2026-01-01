"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS, ProjectType } from "@/data/Projects";

const ProjectsSectionNew = () => {
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-primary text-2xl font-bold">Projects</h2>
        <p className="text-white/60 text-sm mt-1">
          Solving problems with code
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1 overflow-hidden">
        {PROJECTS.slice(0, 6).map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
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
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-card/80 rounded-lg border border-white/10 hover:border-primary/50 p-4 flex flex-col transition-all"
    >
      <h3 className="text-white font-semibold text-base mb-2 truncate">
        {project.title}
      </h3>
      <p className="text-white/60 text-xs mb-3 line-clamp-2 flex-1">
        {project.description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {project.technologies.slice(0, 3).map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-2 py-1"
          >
            <Image
              width={14}
              height={14}
              alt={tech.name}
              src={`/svgs/${tech.img}.svg`}
              className="w-3.5 h-3.5"
            />
            <span className="text-white/80 text-[0.65rem]">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSectionNew;
