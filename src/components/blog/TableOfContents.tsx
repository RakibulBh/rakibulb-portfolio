"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the page
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    const headingData: Heading[] = elements.map((elem, index) => ({
      id: elem.id || `heading-${index}`,
      text: elem.textContent || "",
      level: Number(elem.tagName.charAt(1)),
    }));
    setHeadings(headingData);

    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL without scrolling
      window.history.pushState(null, "", `#${id}`);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block fixed right-[5%] top-32 w-64">
      <div className="space-y-2">
        <p className="text-white/40 text-sm font-mono uppercase mb-4">
          On this page
        </p>
        {headings.map((heading, index) => (
          <a
            key={`${heading.id}-${index}`}
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
            className={`block text-sm transition-colors cursor-pointer ${
              activeId === heading.id
                ? "text-primary font-medium"
                : "text-white/50 hover:text-white/80"
            } ${heading.level === 3 ? "ml-4" : ""}`}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;
