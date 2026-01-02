"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems: Array<{
    id: "about" | "projects" | "blog";
    label: string;
    href: string;
  }> = [
    { id: "about", label: "About", href: "/" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "blog", label: "Blog", href: "/blog" },
  ];

  const getActiveSection = () => {
    if (pathname === "/projects") return "projects";
    if (pathname === "/blog" || pathname?.startsWith("/blog/")) return "blog";
    return "about";
  };

  const activeSection = getActiveSection();

  return (
    <nav className="flex items-center justify-center gap-8 md:gap-12">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="relative text-white/70 hover:text-white/90 transition-colors text-sm md:text-base font-medium"
        >
          {item.label}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: activeSection === item.id ? "100%" : 0,
            }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
