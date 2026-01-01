"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/data/Projects";
import { Github, ExternalLink } from "lucide-react";
import TechnologyBadge from "@/components/TechnologyBadge";

type ProjectCardProps = {
  project: ProjectType;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/50 rounded-xl border border-white/10 hover:border-primary/50 overflow-hidden transition-all w-full aspect-square flex flex-col"
    >
      {/* Image/Video Section */}
      <div className="w-full h-1/2 bg-white/5 relative flex-shrink-0">
        {project.video ? (
          <video
            src={project.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={project.img || '/placeholder.jpg'}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3 flex-1 flex flex-col overflow-hidden">
        {/* Title */}
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, idx) => (
            <TechnologyBadge key={idx} technology={tech} />
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

export default ProjectCard;
