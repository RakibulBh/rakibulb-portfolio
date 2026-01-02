export type BlogPostFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO 8601 format: "2024-01-15"
  tags: string[];
  author: string;
  coverImage?: string;
  published: boolean;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
  readingTime: string; // e.g., "5 min read"
};

export type BlogPostMetadata = Omit<BlogPost, "content">;

export type BlogFilterOptions = {
  searchQuery: string;
  selectedTags: string[];
  sortOrder: "newest" | "oldest";
};
