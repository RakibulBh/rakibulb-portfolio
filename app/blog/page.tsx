"use client";

import {
  BlogContent,
  BlogHeader,
  BlogSection,
  ContentType,
  posts,
} from "@/data/Posts/posts";
import { BlockMath } from "react-katex";
import React from "react";
import Image from "next/image";
import { CodeBlock, MermaidChart } from "@/components/blog/RenderContent";
import { House } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

const Page = () => {
  const post = posts[0];
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar - Collapsible on mobile */}
      <div className="lg:w-64 xl:w-72 lg:fixed lg:h-screen lg:border-r lg:border-white/10 p-6 lg:p-8 bg-card/95 backdrop-blur-lg z-20">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col lg:items-start items-center space-y-4">
            <Image
              src=""
              width={96}
              height={96}
              alt="Profile picture"
              className="rounded-full w-24 h-24 object-cover border-4 border-primary/50"
              priority
            />
            <div className="text-center lg:text-left">
              <h1 className="text-xl font-semibold text-white/90">
                Rakibul B.
              </h1>
              <p className="text-white/50 text-sm mt-1">CS student</p>
            </div>
          </div>

          <nav className="border-t border-white/10 pt-4">
            <NavItem href="/" label="Home" />
          </nav>
        </div>
      </div>

      {/* Main Content - Responsive layout */}
      <main className="flex-1 lg:ml-64 xl:ml-72 px-4 sm:px-6 md:px-8 py-12 max-w-4xl mx-auto">
        <ArticleHeader header={post.header} />

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none mt-8">
          {post.sections.map((section) => (
            <BlogSectionComponent key={section.header} section={section} />
          ))}
        </div>
      </main>

      {/* Table of Contents - Right sidebar */}
      <aside className="hidden xl:block fixed right-0 top-0 h-screen w-60 border-l border-white/10 p-8 backdrop-blur-lg z-10">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white/80 tracking-wide">
            Recently Posted
          </h3>
          <nav className="space-y-2">
            {posts.slice(0, 5).map((post) => (
              <Link
                key={post.header.title}
                href="#"
                className="block text-sm text-white/60 hover:text-white/90 transition-colors truncate"
              >
                {post.header.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};

// Enhanced NavItem Component
const NavItem = ({ href = "/", label }: { href: string; label: string }) => {
  const isActive = false;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all",
        "text-white/70 hover:text-white/90 hover:bg-white/5",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        isActive && "bg-white/10 text-white/90"
      )}
    >
      <House size={20} className="shrink-0" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

// Improved Blog Section
const BlogSectionComponent = ({ section }: { section: BlogSection }) => {
  const renderContent = (
    content: BlogContent,
    type: ContentType,
    idx: number
  ) => {
    const baseStyle = "my-4 first:mt-0 last:mb-0";

    switch (type) {
      case "bullet":
        return (
          <ul className="space-y-3 pl-6 list-disc" key={idx}>
            {content.points?.map((point, idx) => (
              <li key={idx} className="text-white/70 leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        );
      case "diagram":
        return <MermaidChart key={idx} chart={content.content} />;
      case "code":
        return (
          <div className="my-6" key={idx}>
            <CodeBlock code={content.content} language={content.language} />
          </div>
        );
      case "math":
        return (
          <div className="my-6 overflow-x-auto" key={idx}>
            <BlockMath math={content.content ? content.content : ""} />
          </div>
        );
      default:
        return (
          <p className={`${baseStyle} text-white/70 leading-relaxed`} key={idx}>
            {content.content}
          </p>
        );
    }
  };

  return (
    <section className="my-8 first:mt-0 last:mb-0">
      <h2 className="text-xl font-semibold text-white/90 mb-4">
        {section.header}
      </h2>
      <div className="space-y-6">
        {section.content.map((content, idx) =>
          renderContent(content, content.type, idx)
        )}
      </div>
    </section>
  );
};

// Refined Article Header
const ArticleHeader = ({ header }: { header: BlogHeader }) => {
  return (
    <header className="space-y-4 border-b border-white/10 pb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight">
        {header.title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <span>Posted {header.posted}</span>
          <span className="hidden sm:inline">•</span>
          <span>Updated {header.updated}</span>
        </div>
        <span className="hidden sm:inline">•</span>
        <span>By {header.author}</span>
      </div>
    </header>
  );
};

export default Page;
