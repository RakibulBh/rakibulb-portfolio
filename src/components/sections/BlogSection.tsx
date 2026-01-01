"use client";

import { motion } from "framer-motion";

const BlogSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-4"
      >
        <h2 className="text-primary text-3xl font-bold">Blog</h2>
        <p className="text-white/60 text-lg">Coming soon...</p>
        <p className="text-white/40 text-sm max-w-md mx-auto">
          I&apos;ll be sharing my thoughts on software development, tech trends,
          and my learning journey.
        </p>
      </motion.div>
    </div>
  );
};

export default BlogSection;
