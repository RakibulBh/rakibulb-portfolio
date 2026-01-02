"use client";

type BlogSortDropdownProps = {
  value: "newest" | "oldest";
  onChange: (value: "newest" | "oldest") => void;
};

const BlogSortDropdown = ({ value, onChange }: BlogSortDropdownProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as "newest" | "oldest")}
      className="bg-card/50 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 text-sm focus:outline-none focus:border-primary/50 transition-colors cursor-pointer hover:border-primary/30"
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
    </select>
  );
};

export default BlogSortDropdown;
