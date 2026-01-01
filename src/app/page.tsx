"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSectionNew from "@/components/sections/ProjectsSectionNew";
import BlogSection from "@/components/sections/BlogSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    "about" | "projects" | "blog"
  >("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSectionNew />;
      case "blog":
        return <BlogSection />;
    }
  };

  return (
    <main className="min-h-screen h-screen overflow-hidden flex flex-col bg-background px-8 md:px-20 lg:px-32 xl:px-48 py-8">
      {/* Navbar */}
      <div className="mb-12">
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
