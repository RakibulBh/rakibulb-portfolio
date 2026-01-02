"use client";

import { motion } from "framer-motion";

type BlogFiltersProps = {
  allTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
};

const BlogFilters = ({
  allTags,
  selectedTags,
  onToggleTag,
}: BlogFiltersProps) => {
  if (allTags.length === 0) return null;

  return (
    <div className="flex gap-2 flex-wrap">
      {allTags.map((tag, idx) => {
        const isSelected = selectedTags.includes(tag);

        return (
          <motion.button
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.03 }}
            onClick={() => onToggleTag(tag)}
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              isSelected
                ? "bg-primary/20 border-2 border-primary text-primary"
                : "bg-card/50 border border-white/10 text-white/60 hover:border-primary/30 hover:text-white/80"
            }`}
          >
            {tag}
          </motion.button>
        );
      })}
    </div>
  );
};

export default BlogFilters;
