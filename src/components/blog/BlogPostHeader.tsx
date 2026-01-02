import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/blog/utils";
import { Calendar, Clock } from "lucide-react";

type BlogPostHeaderProps = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  const { frontmatter, readingTime } = post;

  return (
    <header className="space-y-3 mb-8">
      {/* Title */}
      <h1 className="text-white text-2xl font-mono font-bold leading-tight">
        {frontmatter.title}
      </h1>

      {/* Metadata */}
      <div className="flex flex-wrap gap-4 text-white/50 text-xs">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{formatDate(frontmatter.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          <span>{readingTime}</span>
        </div>
      </div>
    </header>
  );
};

export default BlogPostHeader;
