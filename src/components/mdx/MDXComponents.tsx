import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import CodeBlock from "./CodeBlock";
import Callout from "./Callout";

// Helper to create heading ID from text
const createHeadingId = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

export const mdxComponents: MDXComponents = {
  // Headings - smaller and monospace
  h1: ({ children }) => {
    const id = typeof children === "string" ? createHeadingId(children) : "";
    return (
      <h1 id={id} className="text-white text-xl font-mono font-bold mt-6 mb-3">
        {children}
      </h1>
    );
  },
  h2: ({ children }) => {
    const id = typeof children === "string" ? createHeadingId(children) : "";
    return (
      <h2 id={id} className="text-white text-lg font-mono font-bold mt-6 mb-3">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const id = typeof children === "string" ? createHeadingId(children) : "";
    return (
      <h3 id={id} className="text-white text-base font-mono font-semibold mt-4 mb-2">
        {children}
      </h3>
    );
  },
  h4: ({ children }) => {
    const id = typeof children === "string" ? createHeadingId(children) : "";
    return (
      <h4 id={id} className="text-white text-sm font-mono font-semibold mt-3 mb-2">
        {children}
      </h4>
    );
  },

  // Paragraphs and text
  p: ({ children }) => (
    <p className="text-white/70 text-base leading-relaxed mb-4">{children}</p>
  ),

  // Links
  a: ({ href, children }) => (
    <Link
      href={href || "#"}
      className="text-primary hover:text-primary/80 underline decoration-primary/50 hover:decoration-primary transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-white/70 space-y-2 mb-4 ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-white/70 space-y-2 mb-4 ml-4">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-white/70 leading-relaxed">{children}</li>
  ),

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/50 pl-4 py-2 my-4 bg-card/30 rounded-r-lg italic text-white/60">
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children, className }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code className="bg-card/70 text-primary px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }

    return <CodeBlock className={className}>{String(children)}</CodeBlock>;
  },

  pre: ({ children }) => <div className="my-6">{children}</div>,

  // Images
  img: ({ src, alt }) => (
    <div className="my-6 rounded-xl overflow-hidden border border-white/10">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={800}
        height={400}
        className="w-full h-auto"
      />
    </div>
  ),

  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-white/10 rounded-lg">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="bg-card/50 text-white/90 font-semibold text-left px-4 py-2 border border-white/10">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="text-white/70 px-4 py-2 border border-white/10">
      {children}
    </td>
  ),

  // Horizontal rule
  hr: () => <hr className="my-8 border-white/10" />,

  // Custom components
  Callout,
};
