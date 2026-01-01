"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <main className="min-h-screen h-screen overflow-hidden flex flex-col px-4 md:px-20 lg:px-32 xl:px-48 py-4 md:py-8">
      {/* Navbar */}
      <div className="mb-6 md:mb-12">
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
