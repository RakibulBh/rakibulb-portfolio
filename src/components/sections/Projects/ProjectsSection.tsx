"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PROJECTS, ProjectType } from "@/data/Projects";

const Projects = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-20 py-8 md:py-12 xl:px-56 space-y-4">
      {/* Header */}
      <div className="space-y-2 max-w-7xl mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
          Projects
        </h1>
        <p className="text-base sm:text-lg text-white/40">
          Using my technical abilities to solve problems.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {[...Array(Math.ceil(PROJECTS.length / 6))].map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full lg:basis-11/12 xl:basis-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {PROJECTS.slice(index * 6, (index + 1) * 6).map(
                    (project, i) => (
                      <ProjectComponent
                        project={project}
                        key={`${index}-${i}`}
                      />
                    )
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-4 md:-left-16 2xl:-left-16 h-8 w-8 md:h-10 md:w-10 border-white/20 hover:border-primary text-primary hover:bg-transparent" />
            <CarouselNext className="-right-4 md:-right-16 2xl:-right-16 h-8 w-8 md:h-10 md:w-10 border-white/20 hover:border-primary text-primary hover:bg-transparent" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

const ProjectComponent = ({
  project: { description, technologies, title, img },
}: {
  project: ProjectType;
}) => {
  return (
    <div className="bg-card flex flex-col rounded-lg border border-white/20 hover:border-white/30 transition-all h-full">
      {/* Video placeholder */}
      <div className="aspect-video rounded-t-lg relative">
        {img ? (
          <Image
            src={`/projects/${img}`}
            layout="fill"
            objectFit="contain"
            alt={`${title}-project-pic`}
          />
        ) : (
          // Placeholder image
          <Image
            src={"/projects/mockproject.png"}
            layout="fill"
            objectFit="contain"
            alt="project-pic"
          />
        )}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#2d2d2d] to-transparent pointer-events-none"></div>
        ;
      </div>

      {/* Info */}
      <div className="flex-1 p-3 flex flex-col gap-1">
        <h1 className="text-white font-bold text-sm truncate">{title}</h1>
        <div className="flex gap-1 items-center">
          {technologies.map((technology) => (
            <TechIcon
              key={technology.name}
              icon={technology.img}
              name={technology.name}
            />
          ))}
        </div>
        <p className="text-white/40 text-xs line-clamp-3 truncate">
          {description}
        </p>
      </div>
    </div>
  );
};

const TechIcon = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-2 py-1.5 transition-all hover:border-white/30 hover:bg-white/10 group">
      <Image
        width={16}
        height={16}
        alt={`${name} technology logo`}
        src={`/svgs/${icon}.svg`}
        className="w-3.5 h-3.5 object-contain brightness-125"
        loading="lazy"
      />
      <p className="text-white/90 text-[0.6rem] sm:text-xs font-medium leading-tight truncate max-w-[8rem]">
        {name}
      </p>
    </div>
  );
};

export default Projects;
