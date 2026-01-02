import { getAllBlogPostMetadata, getAllTags } from "@/lib/blog/mdx";
import HomeClient from "@/components/HomeClient";

export default function ProjectsPage() {
  // Fetch blog data server-side
  let blogPosts: ReturnType<typeof getAllBlogPostMetadata> = [];
  let allTags: string[] = [];

  try {
    blogPosts = getAllBlogPostMetadata();
    allTags = getAllTags();
  } catch (error) {
    console.error("Error loading blog posts:", error);
  }

  return (
    <HomeClient blogPosts={blogPosts} allTags={allTags} initialSection="projects" />
  );
}
