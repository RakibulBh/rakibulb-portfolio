"use client";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ExperienceComponent from "./ExperienceComponent";
import { WORK_EXPERIENCES, EDUCATION_EXPERIENCES } from "@/data/Experiences";
import EducationComponent from "./EducationComponent";
import { motion } from "framer-motion";

const Experiences = () => {
  const [section, setSection] = useState<"work" | "education">("work");

  // Disable scrolling of body when experiences container is hovered
  useEffect(() => {
    const container = document.getElementById("experiences-container");

    const disableBodyScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (container) {
      container.addEventListener("mouseenter", disableBodyScroll);
      container.addEventListener("mouseleave", enableBodyScroll);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", disableBodyScroll);
        container.removeEventListener("mouseleave", enableBodyScroll);
      }
    };
  }, []);

  return (
    <section className="flex flex-col items-center py-8 xl:py-12 2xl:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl 2xl:max-w-6xl space-y-4">
        {/* Navigation Tabs */}
        <div className="rounded-lg bg-card p-1 flex w-full max-w-xs mx-auto relative">
          <Navlink section={section} setSection={setSection} name="Work" />
          <Navlink section={section} setSection={setSection} name="Education" />

          {/* Background layer for inactive state */}
          <motion.div
            className="absolute inset-0 bg-white/5 rounded-md"
            initial={false}
            animate={{
              x: section === "work" ? 0 : "100%",
              width: "50%",
            }}
            transition={{ type: "tween", duration: 0.3 }}
          />
        </div>

        {/* Experiences Container */}
        <div
          id="experiences-container"
          className="relative border border-white/20 rounded-xl p-4 sm:p-6 lg:p-8 space-y-6 bg-gradient-to-b from-card/30 to-card/50 backdrop-blur-sm overflow-y-auto transition-all duration-300 ease-in-out h-[60vh] min-h-[400px] max-h-[800px] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
        >
          {section === "work" &&
            WORK_EXPERIENCES.map((experience) => (
              <ExperienceComponent
                key={experience.company}
                experience={experience}
              />
            ))}
          {section === "education" &&
            EDUCATION_EXPERIENCES.map((education) => (
              <EducationComponent
                key={education.school}
                education={education}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const Navlink = ({
  name,
  section,
  setSection,
}: {
  name: "Work" | "Education";
  section: "work" | "education";
  setSection: Dispatch<SetStateAction<"work" | "education">>;
}) => {
  const isActive = section === name.toLowerCase();

  return (
    <button
      onClick={() => setSection(name.toLowerCase() as typeof section)}
      className={cn(
        "relative flex-1 px-4 py-2.5 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 ease-in-out",
        isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
      )}
      aria-label={`Show ${name} experiences`}
    >
      {name}
    </button>
  );
};

export default Experiences;
