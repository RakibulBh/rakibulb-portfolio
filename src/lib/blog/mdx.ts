import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import {
  BlogPost,
  BlogPostFrontmatter,
  BlogPostMetadata,
} from "@/types/blog";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Get all MDX file paths from the blog content directory
 */
export function getBlogFilePaths(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((file) => /\.mdx?$/.test(file));
}

/**
 * Parse a single MDX file and return post data
 */
export function parseBlogPost(filename: string): BlogPost {
  const filePath = path.join(BLOG_CONTENT_DIR, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const slug = filename.replace(/\.mdx?$/, "");

  // Calculate reading time
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as BlogPostFrontmatter,
    content,
    readingTime: stats.text,
  };
}

/**
 * Get all blog posts (sorted by date, newest first by default)
 */
export function getAllBlogPosts(includeUnpublished = false): BlogPost[] {
  const filePaths = getBlogFilePaths();

  const posts = filePaths
    .map(parseBlogPost)
    .filter((post) => includeUnpublished || post.frontmatter.published);

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get metadata only (no content) for listing pages
 */
export function getAllBlogPostMetadata(
  includeUnpublished = false
): BlogPostMetadata[] {
  return getAllBlogPosts(includeUnpublished).map(
    ({ content, ...metadata }) => metadata
  );
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePaths = getBlogFilePaths();
  const filename = filePaths.find((file) => file.replace(/\.mdx?$/, "") === slug);

  if (!filename) {
    return null;
  }

  return parseBlogPost(filename);
}

/**
 * Get all unique tags across all blog posts
 */
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

// Export formatDate from utils for convenience
export { formatDate } from "./utils";
