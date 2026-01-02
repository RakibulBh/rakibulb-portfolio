"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BlogPostCard from "@/components/blog/BlogPostCard";
import SearchInput from "@/components/SearchInput";
import BlogSortDropdown from "@/components/blog/BlogSortDropdown";
import { BlogPostMetadata, BlogFilterOptions } from "@/types/blog";

type BlogSectionProps = {
  posts: BlogPostMetadata[];
  allTags: string[];
};

const BlogSection = ({ posts, allTags }: BlogSectionProps) => {
  const [filters, setFilters] = useState<BlogFilterOptions>({
    searchQuery: "",
    selectedTags: [],
    sortOrder: "newest",
  });

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(query)
      );
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return filters.sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [posts, filters]);


  return (
    <div className="w-full max-w-2xl mx-auto h-full flex flex-col py-4">
      {/* Header */}
      <div className="mb-6 space-y-2">
        <h2 className="text-primary text-2xl md:text-3xl font-bold">Blog</h2>
        <p className="text-white/60 text-sm">
          Thoughts on software development, tech trends, and my learning journey
        </p>
      </div>

      {/* Search and Sort */}
      <div className="mb-6">
        <div className="flex gap-3">
          <div className="flex-1">
            <SearchInput
              value={filters.searchQuery}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, searchQuery: value }))
              }
              placeholder="Search posts by title..."
            />
          </div>
          <BlogSortDropdown
            value={filters.sortOrder}
            onChange={(value) =>
              setFilters((prev) => ({ ...prev, sortOrder: value }))
            }
          />
        </div>
      </div>

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, idx) => (
            <BlogPostCard key={post.slug} post={post} index={idx} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/40 py-12"
          >
            <p className="text-lg mb-2">No posts found</p>
            <p className="text-sm">
              Try adjusting your filters or search query
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
