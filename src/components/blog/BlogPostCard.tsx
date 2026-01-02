"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostMetadata } from "@/types/blog";
import { formatDate } from "@/lib/blog/utils";
import { Calendar, Clock } from "lucide-react";

type BlogPostCardProps = {
  post: BlogPostMetadata;
  index: number;
};

const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  const { slug, frontmatter, readingTime } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10 pb-6 mb-6 last:border-b-0"
    >
      <Link href={`/blog/${slug}`} className="block group">
        <div className="flex items-baseline justify-between gap-4">
          {/* Title */}
          <h3 className="text-white text-base font-mono group-hover:text-primary transition-colors flex-1">
            {frontmatter.title}
          </h3>

          {/* Metadata */}
          <div className="flex gap-4 text-white/50 text-xs flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(frontmatter.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogPostCard;
